<template>
  <BaseButton v-bind="forwarded">
    <slot />
  </BaseButton>
</template>

<script setup lang="ts">
import {
  BaseButton,
  type BaseButtonProps,
} from '~/components/Shared/Base/BaseButton'
import { useForwardProps } from 'reka-ui'

const props = defineProps<BaseButtonProps>()
const forwarded = useForwardProps(props)
</script>
