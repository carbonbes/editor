<template>
  <DialogRoot v-model:open="open">
    <DialogTrigger>
      <slot />
    </DialogTrigger>

    <DialogPortal to="#teleports">
      <DialogOverlay />

      <DialogContent class="gap-4" aria-describedby="Вставка из буфера">
        <DialogContentHeader>
          <DialogContentHeaderTitle>Вставка из буфера</DialogContentHeaderTitle>
        </DialogContentHeader>

        <TextArea
          placeholder="Вставьте файлы в это поле"
          autofocus
          @paste="handlePaste"
        />
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>

<script setup lang="ts">
import {
  DialogRoot,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogContentHeader,
  DialogContentHeaderTitle,
} from '~/components/Shared/Dialog'
import TextArea from '~/components/Shared/TextArea.vue'
import { injectMediaNodeViewContext } from '~/components/Editor/NodeViews/MediaNodeView/MediaNodeView.vue'

const open = defineModel<boolean>('open', { default: false })

const { add } = injectMediaNodeViewContext()

function handlePaste(e: ClipboardEvent) {
  const files = getFilesFromEvent(e, [
    ...ALLOWED_IMAGE_MIME_TYPES,
    ...ALLOWED_VIDEO_MIME_TYPES,
  ])
  if (!files) return

  add(files)
  open.value = false
}
</script>
