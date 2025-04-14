import type { ShallowRef } from 'vue'
import type { Editor } from '@tiptap/vue-3'
import { EditorKey } from '~/keys'

export default function () {
  const editor = inject(EditorKey) as ShallowRef<Editor | undefined>

  const isReady = computed(() => {
    if (!editor.value) return false

    return editor.value.isInitialized
  })

  return { isReady }
}
