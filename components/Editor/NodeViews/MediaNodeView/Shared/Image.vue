<template>
  <PhotoSwipeItem :href="props.src">
    <Image v-bind="{ ...forwarded, ...$attrs }" class="cursor-zoom-in" />
  </PhotoSwipeItem>
</template>

<script lang="ts" setup>
import { useForwardProps } from 'reka-ui'
import PhotoSwipeItem from '~/components/Shared/PhotoSwipeItem.vue'
import { Image, type ImageProps } from '~/components/Shared/Media'

const props = defineProps<ImageProps>()
const forwarded = useForwardProps(props)
</script>
