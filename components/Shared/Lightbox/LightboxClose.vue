<template>
  <DialogClose v-bind="forwarded">
    <slot />
  </DialogClose>
</template>

<script setup lang="ts">
import { DialogClose, type DialogCloseProps, useForwardProps } from 'reka-ui'

export type LightboxCloseProps = DialogCloseProps

const props = defineProps<LightboxCloseProps>()
const forwarded = useForwardProps(props)
</script>
