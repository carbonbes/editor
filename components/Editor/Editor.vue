<template>
  <EditorContent v-bind="$attrs" :editor class="h-full" />

  <NodesListBottomsheet />
  <NodeActionsListBottomsheet />
  <NodeMenuPopover />
  <SelectionFormattingPopover />
</template>

<script lang="ts" setup>
import { type Content, Editor, EditorContent } from '@tiptap/vue-3'
import NodesListBottomsheet from '~/components/Editor/NodeMenu/NodesList/Bottomsheet.vue'
import NodeActionsListBottomsheet from '~/components/Editor/NodeMenu/NodeActionsList/Bottomsheet.vue'
import NodeMenuPopover from '~/components/Editor/NodeMenu/Popover/Popover.vue'
import SelectionFormattingPopover from '~/components/Editor/SelectionFormattingPopover/Popover.vue'
import { editorInjectionKey } from '~/injectionKeys'
import StarterKit from '@tiptap/starter-kit'
import { NodeTestIdAttr } from '~/tiptap-extensions/nodeTestIdAttr'
import { NodeMoving } from '~/tiptap-extensions/nodeMoving'
import { NodeTransform } from '~/tiptap-extensions/nodeTransform'
import { NodeInsert } from '~/tiptap-extensions/nodeInsert'
import { MediaNode } from '~/tiptap-extensions/mediaNode'
import { NodeSelectionAttr } from '~/tiptap-extensions/nodeSelectionAttr'
import { NodeAttrs } from '~/tiptap-extensions/nodeAttrs'
import { HorizontalRule } from '@tiptap/extension-horizontal-rule'

const { content } = defineProps<{ content?: Content }>()

const editor = shallowRef<Editor>()

provide(editorInjectionKey, editor)

function init() {
  if (editor.value) return

  editor.value = new Editor({
    content,

    extensions: [
      StarterKit.configure({
        horizontalRule: false
      }),
      HorizontalRule.extend({
        content: 'horizontalRule',

        parseHTML() {
          return [{ tag: 'hr' }, { tag: 'div[data-type="horizontalRule"]' }]
        },

        renderHTML() {
          return ['div', { 'data-type': 'horizontalRule' }, ['hr']]
        },
      }),
      NodeTestIdAttr,
      NodeMoving,
      NodeTransform,
      NodeInsert,
      MediaNode,
      NodeSelectionAttr,
      NodeAttrs,
    ],

    editorProps: {
      attributes: {
        class: `p-4 sm:pl-22 pb-50 overflow-x-hidden prose prose-black prose-hr:my-0 prose-img:my-0 prose-video:my-0 touch-pan-y focus:outline-none [&>*]:data-[type=horizontalRule]:my-8 [&>*]:data-[type=horizontalRule]:py-4 [&>*]:data-[selected=true]:relative [&>*]:data-[selected=true]:before:absolute [&>*]:data-[selected=true]:before:inset-0 [&>*]:data-[selected=true]:before:-m-2 [&>*]:data-[selected=true]:before:bg-blue-50 [&>*]:data-[selected=true]:before:rounded-xl [&>*]:data-[selected=true]:before:z-[-1] [&>*]:transition-transform`,
      },
    },
  })
}

function destroy() {
  if (!editor.value) return

  editor.value.destroy()
  editor.value = undefined
}

onMounted(init)
onUnmounted(destroy)
</script>
