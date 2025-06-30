<template>
  <PhotoSwipeItem :href="props.thumbnail">
    <VideoThumbnail v-bind="{ ...forwarded, ...$attrs }" class="cursor-zoom-in" />
  </PhotoSwipeItem>
</template>

<script lang="ts" setup>
import { useForwardProps } from 'reka-ui'
import PhotoSwipeItem from '~/components/Shared/PhotoSwipeItem.vue'
import { VideoThumbnail, type VideoThumbnailProps } from '~/components/Shared/Media'

const props = defineProps<VideoThumbnailProps>()
const forwarded = useForwardProps(props)
</script>