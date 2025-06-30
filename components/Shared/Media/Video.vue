<template>
  <video v-bind="forwarded" />
</template>

<script setup lang="ts">
import { useForwardProps } from 'reka-ui'

export interface VideoProps {
  src: string
  controls?: boolean
  muted?: boolean
  playsInline?: boolean
  autoPlay?: boolean
}

const props = defineProps<VideoProps>()
const forwarded = useForwardProps(props)
</script>
