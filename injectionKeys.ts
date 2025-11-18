import type { Editor } from '@tiptap/vue-3'
import type { ShallowRef } from 'vue'
import type { EditorNodeMenuPopoverContext } from './components/Editor/NodeMenu/Popover'

export const editorInjectionKey = Symbol() as InjectionKey<
  ShallowRef<Editor | undefined>
>

export const editorNodeMenuPopoverInjectionKey =
  Symbol() as InjectionKey<EditorNodeMenuPopoverContext>
