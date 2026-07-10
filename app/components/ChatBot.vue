<script lang="ts" setup>
interface Message {
  role: "user" | "bot"
  text: string
}

const isOpen = ref(false)
const input = ref("")
const messages = ref<Message[]>([
  {
    role: "bot",
    text: "Hola, soy el asistente de Joaquín. Puedo responder preguntas sobre su perfil, experiencia, proyectos y habilidades. ¿Qué te gustaría saber?",
  },
])
const isLoading = ref(false)
const messagesContainer = ref<HTMLElement | null>(null)
const inputRef = ref<HTMLInputElement | null>(null)

onMounted(() => {
  const stored = localStorage.getItem("chatbot-open")
  if (stored === "true") isOpen.value = true

  watch(isOpen, (val) => {
    localStorage.setItem("chatbot-open", String(val))
  })
})

function scrollToBottom() {
  nextTick(() => {
    if (messagesContainer.value) {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
    }
  })
}

function toggleChat() {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    nextTick(() => inputRef.value?.focus())
  }
}

async function sendMessage() {
  const text = input.value.trim()
  if (!text || isLoading.value) return

  messages.value.push({ role: "user", text })
  input.value = ""
  isLoading.value = true
  scrollToBottom()

  try {
    const history = messages.value.slice(1, -1).map((m) => ({
      role: m.role === "bot" ? "model" : "user",
      parts: m.text,
    }))

    const res = await $fetch<{ response: string }>("/api/chatbot", {
      method: "POST",
      body: { message: text, history },
    })

    messages.value.push({ role: "bot", text: res.response })
  } catch {
    messages.value.push({
      role: "bot",
      text: "Lo siento, hubo un error al procesar tu pregunta. Por favor, intenta de nuevo.",
    })
  } finally {
    isLoading.value = false
    scrollToBottom()
  }
}
</script>

<template>
  <Teleport to="body">
    <div class="fixed bottom-6 right-6 z-50">
      <!-- Chat Panel -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="translate-y-4 opacity-0 scale-95"
        enter-to-class="translate-y-0 opacity-100 scale-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="translate-y-0 opacity-100 scale-100"
        leave-to-class="translate-y-4 opacity-0 scale-95"
      >
        <div
          v-show="isOpen"
          class="bg-card border-3 border-black brutal-shadow-lg mb-4 flex h-[500px] w-[360px] flex-col overflow-hidden rounded-none"
        >
          <!-- Header -->
          <div
            class="bg-card flex items-center justify-between border-b-2 border-black px-5 py-4"
          >
            <div class="flex items-center gap-3">
              <div
                class="bg-primary/10 text-primary flex size-9 items-center justify-center border-2 border-black"
              >
                <Icon name="lucide:bot" class="size-5" />
              </div>
              <div>
                <p class="text-foreground text-sm font-bold">Asistente</p>
                <p class="text-muted-foreground text-xs">En línea</p>
              </div>
            </div>
            <button
              class="text-muted-foreground hover:text-foreground flex size-8 items-center justify-center border-2 border-black transition-colors hover:translate-x-0.5 hover:translate-y-0.5 hover:brutal-shadow-offset"
              @click="toggleChat"
            >
              <Icon name="lucide:x" class="size-4" />
            </button>
          </div>

          <!-- Messages -->
          <div
            ref="messagesContainer"
            class="no-scrollbar flex-1 space-y-4 overflow-y-auto px-5 py-4"
          >
            <div
              v-for="(msg, i) in messages"
              :key="i"
              class="flex"
              :class="msg.role === 'user' ? 'justify-end' : 'justify-start'"
            >
              <div
                v-if="msg.role === 'bot'"
                class="bg-primary/10 text-foreground mr-3 flex size-7 shrink-0 items-center justify-center border-2 border-black self-end"
              >
                <Icon name="lucide:bot" class="size-3.5 text-primary" />
              </div>
              <div
                class="max-w-[75%] border-2 border-black px-4 py-2.5 text-sm leading-relaxed"
                :class="
                  msg.role === 'user'
                    ? 'bg-primary text-primary-foreground translate-x-1 translate-y-1'
                    : 'bg-muted text-foreground'
                "
              >
                {{ msg.text }}
              </div>
            </div>

            <!-- Typing Indicator -->
            <div v-if="isLoading" class="flex justify-start">
              <div
                class="bg-primary/10 text-foreground mr-3 flex size-7 shrink-0 items-center justify-center border-2 border-black self-end"
              >
                <Icon name="lucide:bot" class="size-3.5 text-primary" />
              </div>
              <div
                class="bg-muted text-foreground border-2 border-black px-4 py-3 translate-x-1 translate-y-1"
              >
                <div class="flex items-center gap-1.5">
                  <div class="bg-muted-foreground size-2 animate-bounce rounded-full [animation-delay:0ms]" />
                  <div class="bg-muted-foreground size-2 animate-bounce rounded-full [animation-delay:150ms]" />
                  <div class="bg-muted-foreground size-2 animate-bounce rounded-full [animation-delay:300ms]" />
                </div>
              </div>
            </div>
          </div>

          <!-- Input -->
          <form
            class="border-t-2 border-black px-4 py-3"
            @submit.prevent="sendMessage"
          >
            <div class="flex items-center gap-2">
              <input
                ref="inputRef"
                v-model="input"
                type="text"
                placeholder="Escribe tu pregunta..."
                class="form-input bg-background text-foreground placeholder:text-muted-foreground border-2 border-black brutal-shadow-sm w-full px-4 py-2.5 text-sm outline-none focus:brutal-shadow-offset"
                :disabled="isLoading"
              />
              <button
                type="submit"
                :disabled="!input.trim() || isLoading"
                class="bg-primary text-primary-foreground border-2 border-black brutal-shadow-sm flex size-10 shrink-0 items-center justify-center hover:translate-x-1 hover:translate-y-1 hover:brutal-shadow-offset disabled:opacity-50"
              >
                <Icon name="lucide:send-horizontal" class="size-4" />
              </button>
            </div>
          </form>
        </div>
      </Transition>

      <!-- Toggle Button -->
      <Motion
        v-if="!isOpen"
        while-hover="hover"
        while-tap="tap"
        :variants="{
          tap: { scale: 0.92 },
          hover: { scale: 1.05 },
        }"
      >
        <button
          class="bg-primary text-primary-foreground border-3 border-black brutal-shadow-lg flex size-14 items-center justify-center hover:translate-x-1 hover:translate-y-1 hover:brutal-shadow-offset"
          @click="toggleChat"
        >
          <Icon name="lucide:message-circle" class="size-6" />
        </button>
      </Motion>
    </div>
  </Teleport>
</template>
