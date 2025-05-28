<template>
  <div
    class="relative flex items-center justify-center bg-contain bg-center bg-no-repeat cursor-pointer"
    :style="{ backgroundImage: `url(${thumbnail})` }"
  >
    <div
      class="p-3 w-fit bg-black/50 rounded-full backdrop-blur-[2px] inner-border"
    >
      <PlayerPlayIcon class="!size-8 text-white [&>path]:fill-white" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { PlayerPlayIcon } from '~/components/Shared/Icons'

const { media } = defineProps<{ media: string }>()

const thumbnail = ref<string>()

async function init() {
  thumbnail.value = await getFrameFromBase64Video(media)
}

onMounted(init)
</script>
