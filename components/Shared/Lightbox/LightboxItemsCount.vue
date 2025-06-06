<template>
  <Primitive v-bind="forwarded">{{ itemsCount }}</Primitive>
</template>

<script setup lang="ts">
import { Primitive, type PrimitiveProps, useForwardProps } from 'reka-ui'
import { injectLightboxContext } from './'

export type LightboxItemsCountProps = PrimitiveProps

const props = defineProps<LightboxItemsCountProps>()
const forwarded = useForwardProps(props)

const { swiper } = injectLightboxContext()

const itemsCount = computed(() => swiper.value?.slides?.length || 0)
</script>
