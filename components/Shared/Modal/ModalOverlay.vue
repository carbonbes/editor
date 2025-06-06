<template>
  <BaseOverlay v-bind="forwarded" class="fixed inset-0">
    <slot />
  </BaseOverlay>
</template>

<script setup lang="ts">
import { BaseOverlay, type BaseOverlayProps } from '~/components/Shared/Base'
import { useForwardProps } from 'reka-ui'

const props = defineProps<BaseOverlayProps>()
const forwarded = useForwardProps(props)
</script>
