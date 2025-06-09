<template>
  <DialogOverlay v-bind="forwarded" />
</template>

<script setup lang="ts">
import {
  DialogOverlay,
  type DialogOverlayProps,
  useForwardProps,
} from 'reka-ui'

export type LightboxOverlayProps = DialogOverlayProps

const props = defineProps<LightboxOverlayProps>()
const forwarded = useForwardProps(props)
</script>
