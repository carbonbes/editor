<template>
  <Image v-if="isImage" :src="media" :class="imageClass" />
  <Video v-else :src="media" :class="videoClass" />
</template>

<script setup lang="ts">
import Image from '~/components/Shared/Image.vue'
import Video from '~/components/Shared/Video.vue'

defineOptions({
  inheritAttrs: false,
})

const { media, imageClass, videoClass } = defineProps<{
  media: string
  imageClass?: string
  videoClass?: string
}>()

const group = ref<'image' | 'video' | null>(null)

const isImage = computed(() => group.value === 'image')

async function init() {
  const buffer = await getBufferFromBase64(media)
  const { mime } = (await getFileTypeFromBuffer(buffer)) || {}

  if (!mime) return

  if (mime.startsWith('image/')) {
    group.value = 'image'
  } else if (mime.startsWith('video/')) {
    group.value = 'video'
  }
}

onMounted(init)
</script>
