<template>
  <div
    class="relative flex items-center justify-center bg-contain bg-center bg-no-repeat"
    :style
  >
    <div
      class="p-2 w-fit bg-black/50 rounded-full backdrop-blur-sm inner-border"
    >
      <PlayerPlayIcon class="!size-8 text-white [&>path]:fill-white" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { PlayerPlayIcon } from '~/components/Shared/Icons'

const { thumbnail } = defineProps<{ thumbnail: string }>()

const style = computed(() => {
  return { backgroundImage: `url(${thumbnail})` }
})
</script>
