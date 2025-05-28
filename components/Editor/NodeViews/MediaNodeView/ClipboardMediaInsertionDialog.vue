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

        <TextArea placeholder="Вставьте файлы в это поле" autofocus />
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

const open = defineModel<boolean>('open', { default: false })
</script>
