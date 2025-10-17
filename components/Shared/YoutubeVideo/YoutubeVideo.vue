<template>
  <ScriptYouTubePlayer :video-id="id" class="w-full aspect-video">
    <template #awaitingLoad>
      <YoutubeIcon
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[68px] h-[48px]"
      />
    </template>

    <template #loading>
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full backdrop-blur-sm"
      >
        <Loader color="white" />
      </div>
    </template>
  </ScriptYouTubePlayer>
</template>

<script setup lang="ts">
import { YoutubeIcon } from '~/components/Shared/Icons'
import Loader from '~/components/Shared/Loader.vue'

export interface YoutubeVideoProps {
  id: string
}

const { id } = defineProps<YoutubeVideoProps>()
</script>
