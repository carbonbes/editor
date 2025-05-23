<template>
  <PopoverRoot v-model:open="open">
    <PopoverPortal to="#teleports">
      <PopoverContent
        :reference="virtualEl"
        :side-offset="6"
        :collision-padding="16"
        as-child
        @open-auto-focus="(e) => e.preventDefault()"
        @focus-outside="(e) => e.preventDefault()"
      >
        <Buttons>
          <Button v-if="canToggleBold" :active="boldActive" @click="toggleBold">
            <MarkIcon bold />
          </Button>

          <Button
            v-if="canToggleItalic"
            :active="italicActive"
            @click="toggleItalic"
          >
            <MarkIcon italic />
          </Button>

          <Button
            v-if="canToggleStrike"
            :active="strikeActive"
            @click="toggleStrike"
          >
            <MarkIcon strikethrough />
          </Button>

          <Button v-if="canToggleCode" :active="codeActive" @click="toggleCode">
            <MarkIcon code />
          </Button>
        </Buttons>
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>

<script setup lang="ts">
import { PopoverRoot, PopoverPortal, PopoverContent } from 'reka-ui'
import { Buttons, Button } from './'
import { MarkIcon } from '~/components/Shared/Icons'

const open = ref(false)

const { textSelectionIsEmpty } = useEditorSelection()
const { virtualEl } = useEditorTextSelectionRect()

watch(virtualEl, (value) => {
  if (textSelectionIsEmpty.value) return

  open.value = !!value
})

const {
  canToggleBold,
  canToggleItalic,
  canToggleStrike,
  canToggleCode,
  boldActive,
  italicActive,
  strikeActive,
  codeActive,
  toggleBold,
  toggleItalic,
  toggleStrike,
  toggleCode,
} = useEditorTextSelectionCommands()
</script>
