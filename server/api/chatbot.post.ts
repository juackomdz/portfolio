import { GoogleGenAI } from "@google/genai"
import { portfolioKnowledge } from "../utils/portfolio-knowledge"

interface ChatMessage {
  role: "user" | "model"
  parts: string
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()

  if (!config.geminiApiKey) {
    throw createError({
      statusCode: 500,
      message: "Gemini API key no configurada",
    })
  }

  const body = await readBody(event)
  const { message, history = [] } = body as {
    message: string
    history?: ChatMessage[]
  }

  if (!message || typeof message !== "string") {
    throw createError({
      statusCode: 400,
      message: "El campo 'message' es requerido",
    })
  }

  const chatHistory = history.map((msg: ChatMessage) => ({
    role: msg.role,
    parts: [{ text: msg.parts }],
  }))

  const genAI = new GoogleGenAI({ apiKey: config.geminiApiKey })

  const chat = genAI.chats.create({
    model: "gemini-2.5-flash",
    config: {
      systemInstruction: portfolioKnowledge
    },
    history: chatHistory
  })

  try {
    const result = await chat.sendMessage({ message })
    const response = result.text

    return { response }
  } catch (error: any) {
    console.error("Gemini API error:", error)
    throw createError({
      statusCode: 500,
      message: "Error al conectar con el servicio de IA",
    })
  }
})
