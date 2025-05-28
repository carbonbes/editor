<template>
  <Image :src="media" class="max-h-[300px]" />
</template>

<script setup lang="ts">
import Image from '~/components/Shared/Image.vue'

const { media } = defineProps<{
  media: string
}>()
</script>
