<template>
  <DialogRoot v-model:open="open">
    <DialogTrigger as-child>
      <slot />
    </DialogTrigger>

    <DialogPortal to="#teleports">
      <DialogOverlay />

      <DialogContent aria-describedby="">
        <DialogContentHeader class="p-4">
          <DialogContentHeaderTitle>Вставка из буфера</DialogContentHeaderTitle>
        </DialogContentHeader>

        <div class="px-4 pb-4">
          <TextArea
            placeholder="Вставьте файлы в это поле"
            autofocus
            class="w-full"
            @paste="handlePaste"
          />
        </div>
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
