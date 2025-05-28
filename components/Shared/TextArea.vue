<template>
  <BaseInput as-child>
    <textarea
      ref="textAreaRef"
      v-model="value"
      :placeholder
      class="p-2 rounded-xl resize-none"
    />
  </BaseInput>
</template>

<script setup lang="ts">
import BaseInput from '~/components/Shared/Base/BaseInput.vue'

const { placeholder, autofocus } = defineProps<{
  placeholder?: string
  autofocus?: boolean
}>()

const value = defineModel<string>()

const textAreaRef = useTemplateRef<HTMLTextAreaElement>('textAreaRef')

async function focus() {
  await nextTick()
  textAreaRef.value?.focus()
}

function adjustHeight() {
  if (!textAreaRef.value) return

  textAreaRef.value.style.height = 'auto'
  textAreaRef.value.style.height = textAreaRef.value.scrollHeight + 'px'
}

watch(value, adjustHeight, { immediate: true })

async function init() {
  if (autofocus) await focus()
}

onMounted(init)
</script>
