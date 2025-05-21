<template>
  <PopoverRoot v-model:open="open">
    <PopoverPortal to="#teleports">
      <PopoverContent
        :reference="virtualEl || ref()"
        as-child
        @open-auto-focus="(e) => e.preventDefault()"
      >
        <Buttons>
          <Button v-if="canSetBold" :active="boldActive" @click="toggleBold">
            <MarkIcon bold />
          </Button>

          <Button
            v-if="canSetItalic"
            :active="italicActive"
            @click="toggleItalic"
          >
            <MarkIcon italic />
          </Button>

          <Button
            v-if="canSetStrike"
            :active="strikeActive"
            @click="toggleStrike"
          >
            <MarkIcon strikethrough />
          </Button>

          <Button v-if="canSetCode" :active="codeActive" @click="toggleCode">
            <MarkIcon code />
          </Button>
        </Buttons>
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>

<script setup lang="ts">
import { PopoverRoot, PopoverPortal, PopoverContent } from 'reka-ui'
import Buttons from './Buttons.vue'
import Button from './Button.vue'
import { MarkIcon } from '~/components/Shared/Icons'

const open = ref(false)

const { textSelectionIsEmpty } = useEditorSelection()
const { rect, virtualEl } = useEditorTextSelectionRect()

watch(rect, (value) => {
  if (textSelectionIsEmpty.value) return

  open.value = !!value
})

const {
  canSetBold,
  canSetItalic,
  canSetStrike,
  canSetCode,
  boldActive,
  italicActive,
  strikeActive,
  codeActive,
  toggleBold,
  toggleItalic,
  toggleStrike,
  toggleCode,
} = useEditorCommands()
</script>
