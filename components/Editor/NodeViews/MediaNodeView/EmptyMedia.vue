<template>
  <BaseNodeView
    class="flex items-center justify-center cursor-pointer aspect-video"
    @click="open"
  >
    <LibraryPhotoIcon class="!size-12" />
  </BaseNodeView>
</template>

<script setup lang="ts">
import BaseNodeView from '~/components/Editor/NodeViews/MediaNodeView/Shared/BaseNodeView.vue'
import { LibraryPhotoIcon } from '~/components/Shared/Icons'

const { open } = useEditorMediaNodeViewFileDialog()

onMounted(open)
</script>
