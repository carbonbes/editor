import type { Editor } from '@tiptap/vue-3'
import type { ShallowRef } from 'vue'

export const EditorKey = Symbol() as InjectionKey<
  ShallowRef<Editor | undefined>
>
