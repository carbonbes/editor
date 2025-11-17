import { editorInjectionKey } from '~/injectionKeys'
import type { Editor } from '@tiptap/vue-3'
import type { ShallowRef } from 'vue'

export function useEditor() {
  return inject(editorInjectionKey) as ShallowRef<Editor | undefined>
}
