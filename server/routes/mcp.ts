import { McpServer } from '@modelcontextprotocol/sdk/server/mcp'
import { WebStandardStreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/webStandardStreamableHttp'
import { isInitializeRequest } from '@modelcontextprotocol/sdk/types'
import { portfolioKnowledge } from '../utils/portfolio-knowledge'
import { z } from 'zod'

const server = new McpServer({
    name: 'portfolio-mcp',
    version: '1.0.0',
})

function extractSection(name: string): string {
    const section = portfolioKnowledge.split('## ').find(s => s.startsWith(name))
    return section ? '## ' + section : ''
}

server.registerTool('get-projects', {
    title: 'Proyectos',
    description: 'List all portfolio projects with tech stack and URLs',
}, async () => ({
    content: [{ type: 'text', text: extractSection('Proyectos') }],
}))

server.registerTool('get-experience', {
    title: 'Experiencia',
    description: 'Get professional work experience history',
}, async () => ({
    content: [{ type: 'text', text: extractSection('Experiencia Profesional') }],
}))

server.registerTool('get-skills', {
    title: 'Stack Tecnológico',
    description: 'Get the full tech stack (languages, frameworks, tools)',
}, async () => ({
    content: [{ type: 'text', text: extractSection('Stack Tecnológico') }],
}))

server.registerTool('get-contact', {
    title: 'Contacto',
    description: 'Get contact information (email, LinkedIn, GitHub)',
}, async () => ({
    content: [{ type: 'text', text: extractSection('Información Personal') }],
}))

server.registerTool('query-knowledge', {
    title: 'Buscar',
    description: 'Search the portfolio knowledge base by keyword',
    inputSchema: {
        query: z.string().describe('Keyword to search in portfolio knowledge'),
    },
}, async ({ query }) => {
    const lines = portfolioKnowledge.split('\n').filter(l =>
        l.toLowerCase().includes(query.toLowerCase()),
    )
    return {
        content: [{
            type: 'text',
            text: lines.length > 0
                ? lines.join('\n')
                : `No se encontró información para "${query}".`,
        }],
    }
})

const transports = new Map<string, WebStandardStreamableHTTPServerTransport>()

export default defineEventHandler(async (event) => {
    const sessionId = getHeader(event, 'mcp-session-id')

    let parsedBody: unknown
    if (event.method === 'POST') {
        parsedBody = await readBody(event)
    }

    let transport: WebStandardStreamableHTTPServerTransport

    if (sessionId && transports.has(sessionId)) {
        transport = transports.get(sessionId)!
    } else if (!sessionId && parsedBody && isInitializeRequest(parsedBody)) {
        transport = new WebStandardStreamableHTTPServerTransport({
            sessionIdGenerator: () => crypto.randomUUID(),
            onsessioninitialized: (id) => { transports.set(id, transport) },
        })
        transport.onclose = () => {
            if (transport.sessionId) transports.delete(transport.sessionId)
        }
        await server.connect(transport)
    } else {
        throw createError({ statusCode: 400, statusMessage: 'Invalid or missing MCP session' })
    }

    const request = toWebRequest(event)
    const response = await transport.handleRequest(request, { parsedBody })
    sendWebResponse(event, response)
})
