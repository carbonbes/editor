<template>
  <div
    class="bg-gray-100 flex items-center justify-center rounded-2xl cursor-pointer aspect-video"
    @click="open"
  >
    <LibraryPhotoIcon class="!size-12" />
  </div>
</template>

<script setup lang="ts">
import { LibraryPhotoIcon } from '~/components/Shared/Icons'

const { open } = useEditorFileDialog()

onMounted(open)
</script>
