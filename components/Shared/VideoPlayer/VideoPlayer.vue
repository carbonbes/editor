<template>
  <VideoPlayerThumbnail v-if="!isPlaying" :thumbnail @click="handleClick" />
  <Video v-else v-bind="forwardedProps" />
</template>

<script setup lang="ts">
import { Video, type VideoProps } from '~/components/Shared/Media'
import {
  VideoPlayerThumbnail,
  type VideoPlayerThumbnailProps,
} from '~/components/Shared/VideoPlayer'
import { useForwardProps } from 'reka-ui'

export interface VideoPlayerProps
  extends VideoPlayerThumbnailProps,
    VideoProps {}

const isPlaying = ref(false)

const props = defineProps<VideoPlayerProps>()
const forwardedProps = useForwardProps(props)

function handleClick() {
  isPlaying.value = true
}
</script>
