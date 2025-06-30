<template>
  <img v-bind="forwarded">
</template>

<script setup lang="ts">
import { useForwardProps } from 'reka-ui'

export interface ImageProps {
  src: string
  alt?: string
}

const props = withDefaults(defineProps<ImageProps>(), {
  alt: '',
})

const forwarded = useForwardProps(props)
</script>
