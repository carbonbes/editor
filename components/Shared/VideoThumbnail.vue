<template>
  <Image :src="thumbnail" />
</template>

<script setup lang="ts">
import Image from '~/components/Shared/Image.vue'

const { thumbnail } = defineProps<{ thumbnail: string }>()
</script>