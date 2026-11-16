import { createMcpHandler, hostHeaderValidationResponse, localhostAllowedHostnames, localhostAllowedOrigins, McpServer, originValidationResponse } from "@modelcontextprotocol/server";
import { portfolioKnowledge } from '../utils/portfolio-knowledge'
import { z } from 'zod'

function buildServer(): McpServer {
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
        inputSchema: z.object({
            query: z.string().describe('Keyword to search in portfolio knowledge'),
        }),
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

    return server
}

const handler = createMcpHandler(buildServer, { legacy: 'stateless' })

export default defineEventHandler(async (event) => {
    let parsedBody: unknown
    if (event.method === 'POST') {
        parsedBody = await readBody(event)
    }

    const request = toWebRequest(event)
    const rejected =
        hostHeaderValidationResponse(request, localhostAllowedHostnames()) ??
        originValidationResponse(request, localhostAllowedOrigins())
    if (rejected) {
        sendWebResponse(event, rejected)
        return
    }

    const response = await handler.fetch(request, { parsedBody })
    await sendWebResponse(event, response)
})