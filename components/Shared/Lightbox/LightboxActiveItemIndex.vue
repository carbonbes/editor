<template>
  <Primitive v-bind="forwarded">{{ index + 1 }}</Primitive>
</template>

<script setup lang="ts">
import { Primitive, type PrimitiveProps, useForwardProps } from 'reka-ui'
import { injectLightboxContext } from './'

export type LightboxActiveItemIndexProps = PrimitiveProps

const props = defineProps<LightboxActiveItemIndexProps>()
const forwarded = useForwardProps(props)

const { swiper } = injectLightboxContext()

const index = computed(() => swiper.value?.realIndex ?? 0)
</script>
