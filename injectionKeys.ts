import type { Editor } from '@tiptap/vue-3'
import type { ShallowRef } from 'vue'

export const editorInjectionKey = Symbol() as InjectionKey<
  ShallowRef<Editor | undefined>
>
