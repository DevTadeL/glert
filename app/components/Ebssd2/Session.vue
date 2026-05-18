<script setup lang="ts">
import { ref, computed } from 'vue'
import { questions as allQuestions, type Question } from './questions'

interface DisplayOption {
  text: string
  originalIndex: number
}

interface DisplayQuestion {
  question: Question
  displayOptions: DisplayOption[]
}

type SessionState = 'idle' | 'active' | 'finished'

const state = ref<SessionState>('idle')
const queue = ref<Question[]>([])
const correctlyAnsweredIds = ref(new Set<string>())
const errorCount = ref(0)
const currentDisplay = ref<DisplayQuestion | null>(null)
const answered = ref(false)
const selectedDisplayIndex = ref<number | null>(null)
const lastWasCorrect = ref(false)

const totalQuestions = computed(() => allQuestions.length)
const answeredCount = computed(() => correctlyAnsweredIds.value.size)
const progressPct = computed(() =>
  totalQuestions.value === 0 ? 0 : (answeredCount.value / totalQuestions.value) * 100
)

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j]!, a[i]!]
  }
  return a
}

function prepareDisplay(q: Question): DisplayQuestion {
  const indexed: DisplayOption[] = q.options.map((text, originalIndex) => ({ text, originalIndex }))
  return { question: q, displayOptions: shuffle(indexed) }
}

function start() {
  queue.value = shuffle(allQuestions)
  errorCount.value = 0
  correctlyAnsweredIds.value = new Set()
  state.value = 'active'
  pickNext()
}

function pickNext() {
  if (queue.value.length === 0) {
    state.value = 'finished'
    currentDisplay.value = null
    return
  }
  const next = queue.value.shift()!
  currentDisplay.value = prepareDisplay(next)
  answered.value = false
  selectedDisplayIndex.value = null
  lastWasCorrect.value = false
}

function selectAnswer(displayIndex: number) {
  if (answered.value || !currentDisplay.value) return
  answered.value = true
  selectedDisplayIndex.value = displayIndex

  const chosen = currentDisplay.value.displayOptions[displayIndex]!
  const isCorrect = chosen.originalIndex === currentDisplay.value.question.correctIndex
  lastWasCorrect.value = isCorrect

  if (isCorrect) {
    correctlyAnsweredIds.value.add(currentDisplay.value.question.id)
    setTimeout(() => {
      if (state.value === 'active') pickNext()
    }, 700)
  } else {
    errorCount.value++
    queue.value.push(currentDisplay.value.question)
  }
}

function optionState(displayIndex: number): 'idle' | 'correct' | 'wrong' | 'muted' {
  if (!answered.value || !currentDisplay.value) return 'idle'
  const option = currentDisplay.value.displayOptions[displayIndex]!
  const isCorrectOption = option.originalIndex === currentDisplay.value.question.correctIndex
  const isSelected = displayIndex === selectedDisplayIndex.value
  if (isCorrectOption) return 'correct'
  if (isSelected) return 'wrong'
  return 'muted'
}
</script>

<template>
  <div class="session">
    <div v-if="state === 'idle'" class="screen screen-center">
      <h1 class="title">EBSSD</h1>
      <p class="subtitle">{{ totalQuestions }} Fragen</p>
      <button class="primary" @click="start">Session starten</button>
    </div>

    <div v-else-if="state === 'active' && currentDisplay" class="screen">
      <div class="meta">
        <span>{{ answeredCount }} / {{ totalQuestions }} richtig</span>
        <span :class="{ errors: errorCount > 0 }">{{ errorCount }} Fehler</span>
      </div>
      <div class="progress">
        <div class="progress-fill" :style="{ width: `${progressPct}%` }" />
      </div>

      <p class="question">{{ currentDisplay.question.question }}</p>

      <div class="options">
        <button
          v-for="(option, index) in currentDisplay.displayOptions"
          :key="`${currentDisplay.question.id}-${option.originalIndex}`"
          :disabled="answered"
          :data-state="optionState(index)"
          class="option"
          @click="selectAnswer(index)"
        >
          {{ option.text }}
        </button>
      </div>

      <button
        v-if="answered && !lastWasCorrect"
        class="primary continue"
        @click="pickNext"
      >
        Weiter
      </button>
    </div>

    <div v-else-if="state === 'finished'" class="screen screen-center">
      <h2 class="title">Fertig</h2>
      <p class="subtitle">
        <span :class="errorCount === 0 ? 'good' : 'errors'">{{ errorCount }}</span> Fehler insgesamt
      </p>
      <button class="primary" @click="start">Nochmal starten</button>
    </div>
  </div>
</template>

<style scoped>
.session {
  max-width: 36rem;
  margin: 0 auto;
  padding: 2rem 1.25rem 3rem;
  color: #4a2e1a;
  font-family: Georgia, 'Times New Roman', serif;
}

.screen {
  animation: floatIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.screen-center {
  text-align: center;
  padding-top: 4rem;
}

.title {
  font-family: 'Libre Barcode 39 Text', serif;
  font-size: 5rem;
  font-weight: normal;
  line-height: 1;
  user-select: none;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.125rem;
  opacity: 0.7;
  margin-bottom: 2.5rem;
}

.primary {
  background: transparent;
  border: 1.5px solid #4a2e1a;
  color: #4a2e1a;
  font-family: inherit;
  font-size: 1.125rem;
  padding: 0.9rem 2.5rem;
  border-radius: 999px;
  cursor: pointer;
  touch-action: manipulation;
  transition: background 0.2s, color 0.2s;
}

.primary:hover,
.primary:active {
  background: #4a2e1a;
  color: #eae3d9;
}

.continue {
  display: block;
  width: 100%;
  margin-top: 1.5rem;
}

.meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  opacity: 0.7;
  margin-bottom: 0.5rem;
}

.meta .errors {
  opacity: 1;
}

.progress {
  height: 2px;
  background: rgba(74, 46, 26, 0.15);
  border-radius: 999px;
  overflow: hidden;
  margin-bottom: 2rem;
}

.progress-fill {
  height: 100%;
  background: #4a2e1a;
  transition: width 0.3s ease;
}

.question {
  font-size: 1.25rem;
  line-height: 1.45;
  margin-bottom: 1.75rem;
}

.options {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.option {
  background: transparent;
  border: 1.5px solid rgba(74, 46, 26, 0.25);
  color: #4a2e1a;
  font-family: inherit;
  font-size: 1rem;
  text-align: left;
  padding: 1rem 1.25rem;
  border-radius: 0.75rem;
  cursor: pointer;
  touch-action: manipulation;
  transition: border-color 0.15s, background 0.15s, opacity 0.15s;
}

.option:hover:not(:disabled) {
  border-color: #4a2e1a;
}

.option:disabled {
  cursor: default;
}

.option[data-state='correct'] {
  border-color: #5e9442;
  background: rgba(94, 148, 66, 0.14);
  color: #36571f;
}

.option[data-state='wrong'] {
  border-color: #b23a3a;
  background: rgba(178, 58, 58, 0.12);
  color: #722424;
}

.option[data-state='muted'] {
  opacity: 0.35;
}

.good {
  color: #5e9442;
}

.errors {
  color: #b23a3a;
}

@keyframes floatIn {
  from {
    opacity: 0;
    transform: translateY(28px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
