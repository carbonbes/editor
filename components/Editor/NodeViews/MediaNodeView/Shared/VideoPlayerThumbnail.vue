<template>
  <PhotoSwipeItem :href="props.src" data-pswp-type="video">
    <VideoPlayerThumbnail
      v-bind="$attrs"
      :thumbnail="props.thumbnail"
      class="cursor-zoom-in"
    />
  </PhotoSwipeItem>
</template>

<script lang="ts" setup>
import PhotoSwipeItem from '~/components/Shared/PhotoSwipe/PhotoSwipeItem.vue'
import {
  VideoPlayerThumbnail,
  type VideoPlayerThumbnailProps,
} from '~/components/Shared/VideoPlayer'

const props = defineProps<{ src: string } & VideoPlayerThumbnailProps>()
</script>
