<template>
  <DialogPortal v-bind="forwarded">
    <slot />
  </DialogPortal>
</template>

<script setup lang="ts">
import { DialogPortal, type DialogPortalProps, useForwardProps } from 'reka-ui'

export type LightboxPortalProps = DialogPortalProps

const props = defineProps<LightboxPortalProps>()
const forwarded = useForwardProps(props)
</script>
