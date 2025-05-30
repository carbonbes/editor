<template>
  <BaseMediaNodeView
    class="flex items-center justify-center cursor-pointer aspect-video"
    @click="open"
  >
    <LibraryPhotoIcon class="!size-12" />
  </BaseMediaNodeView>
</template>

<script setup lang="ts">
import BaseMediaNodeView from '~/components/Editor/NodeViews/MediaNodeView/BaseMediaNodeView.vue'
import { LibraryPhotoIcon } from '~/components/Shared/Icons'

const { open } = useEditorMediaNodeViewFileDialog()

onMounted(open)
</script>
