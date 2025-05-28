<template>
  <div class="relative bg-gray-100 flex justify-center">
    <div class="absolute top-0 right-0 m-2 z-[1]">
      <NodeActionsListDropdownTrigger />
    </div>

    <Image v-if="isImage" :media />
    <Video v-else :media />
  </div>
</template>

<script setup lang="ts">
import NodeActionsListDropdownTrigger from './NodeActionsListDropdownTrigger.vue'
import Image from './Image.vue'
import Video from './Video.vue'

const { media } = defineProps<{ media: string }>()

const group = ref<'image' | 'video'>('image')

const isImage = computed(() => group.value === 'image')

async function init() {
  const mediaGroup = await getMediaGroupFromBase64Media(media)
  if (!mediaGroup) return

  group.value = mediaGroup
}

onMounted(init)
</script>
