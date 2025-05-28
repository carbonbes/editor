<template>
  <Video :src="media" class="aspect-video" />
</template>

<script setup lang="ts">
import Video from '~/components/Shared/Video/Video.vue'

const { media } = defineProps<{
  media: string
}>()
</script>
