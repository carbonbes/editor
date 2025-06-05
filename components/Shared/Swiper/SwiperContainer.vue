<template>
  <swiper-container v-bind="forwarded">
    <slot />
  </swiper-container>
</template>

<script setup lang="ts">
import type {
  SwiperContainerEmits,
  SwiperContainerProps,
} from '~/components/Shared/Swiper'
import { useForwardPropsEmits } from 'reka-ui'

const props = defineProps<SwiperContainerProps>()
const emits = defineEmits<SwiperContainerEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>
