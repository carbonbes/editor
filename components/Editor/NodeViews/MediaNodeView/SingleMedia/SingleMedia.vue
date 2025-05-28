<template>
  <div class="relative bg-gray-100 flex justify-center aspect-video">
    <div class="absolute top-0 right-0 m-2 z-[1]">
      <NodeActionsListDropdownTrigger />
    </div>

    <Image v-if="isImage" :src="singleMedia" />
    <Video v-else :src="singleMedia" />
  </div>
</template>

<script setup lang="ts">
import NodeActionsListDropdownTrigger from './NodeActionsListDropdownTrigger.vue'
import Image from '~/components/Shared/Image.vue'
import Video from '~/components/Shared/Video/Video.vue'

const { singleMedia } = defineProps<{ singleMedia: string }>()

const group = ref<'image' | 'video'>('image')

const isImage = computed(() => group.value === 'image')

async function init() {
  const mediaGroup = await getMediaGroupFromBase64Media(singleMedia)
  if (!mediaGroup) return

  group.value = mediaGroup
}

onMounted(init)
</script>
