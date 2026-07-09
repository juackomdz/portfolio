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
          class="bg-card border-border mb-4 flex h-[500px] w-[360px] flex-col overflow-hidden rounded-2xl border shadow-xl"
        >
          <!-- Header -->
          <div
            class="bg-card flex items-center justify-between border-b px-5 py-4"
          >
            <div class="flex items-center gap-3">
              <div
                class="bg-primary/10 text-primary flex size-9 items-center justify-center rounded-full"
              >
                <Icon name="lucide:bot" class="size-5" />
              </div>
              <div>
                <p class="text-foreground text-sm font-semibold">Asistente</p>
                <p class="text-muted-foreground text-xs">En línea</p>
              </div>
            </div>
            <button
              class="text-muted-foreground hover:text-foreground flex size-8 items-center justify-center rounded-full transition-colors"
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
                class="bg-primary/10 text-foreground mr-3 flex size-7 shrink-0 items-center justify-center rounded-full self-end"
              >
                <Icon name="lucide:bot" class="size-3.5 text-primary" />
              </div>
              <div
                class="max-w-[75%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed"
                :class="
                  msg.role === 'user'
                    ? 'bg-primary text-primary-foreground rounded-br-md'
                    : 'bg-muted text-foreground rounded-bl-md'
                "
              >
                {{ msg.text }}
              </div>
            </div>

            <!-- Typing Indicator -->
            <div v-if="isLoading" class="flex justify-start">
              <div
                class="bg-primary/10 text-foreground mr-3 flex size-7 shrink-0 items-center justify-center rounded-full self-end"
              >
                <Icon name="lucide:bot" class="size-3.5 text-primary" />
              </div>
              <div
                class="bg-muted text-foreground rounded-2xl rounded-bl-md px-4 py-3"
              >
                <div class="flex items-center gap-1.5">
                  <span class="bg-muted-foreground size-1.5 animate-bounce rounded-full [animation-delay:0ms]" />
                  <span class="bg-muted-foreground size-1.5 animate-bounce rounded-full [animation-delay:150ms]" />
                  <span class="bg-muted-foreground size-1.5 animate-bounce rounded-full [animation-delay:300ms]" />
                </div>
              </div>
            </div>
          </div>

          <!-- Input -->
          <form
            class="border-border flex items-center gap-2 border-t px-4 py-3"
            @submit.prevent="sendMessage"
          >
            <input
              ref="inputRef"
              v-model="input"
              type="text"
              placeholder="Escribe tu pregunta..."
              class="form-input bg-background text-foreground placeholder:text-muted-foreground border-border focus:ring-ring w-full rounded-xl border px-4 py-2.5 text-sm outline-none focus:ring-2"
              :disabled="isLoading"
            />
            <button
              type="submit"
              :disabled="!input.trim() || isLoading"
              class="bg-primary text-primary-foreground hover:bg-primary/90 flex size-10 shrink-0 items-center justify-center rounded-xl transition-colors disabled:opacity-50"
            >
              <Icon name="lucide:send-horizontal" class="size-4" />
            </button>
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
          class="bg-primary text-primary-foreground shadow-lg flex size-14 items-center justify-center rounded-full transition-shadow hover:shadow-xl"
          @click="toggleChat"
        >
          <Icon name="lucide:message-circle" class="size-6" />
        </button>
      </Motion>
    </div>
  </Teleport>
</template>
