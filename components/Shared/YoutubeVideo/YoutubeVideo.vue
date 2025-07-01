<template>
  <iframe :src class="w-full aspect-video" />
</template>

<script setup lang="ts">
export interface YoutubeVideoProps {
  id: string
}

const { id } = defineProps<YoutubeVideoProps>()

const src = computed(
  () => `https://www.youtube.com/embed/${id}?controls=2&autoplay=1&mute=1`,
)
</script>
