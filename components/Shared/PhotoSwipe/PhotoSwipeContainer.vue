<template>
  <div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { PhotoSwipeOptions } from 'photoswipe'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import PhotoSwipeVideoPlugin from '~/utils/photoswipeVideoPlugin.esm'
import 'photoswipe/style.css'
import { useForwardProps } from 'reka-ui'

export type PhotoSwipeContainerProps = PhotoSwipeOptions

const props = defineProps<PhotoSwipeContainerProps>()
const forwardedProps = useForwardProps(props)

const lightbox = useState<PhotoSwipeLightbox | null>(() => null)

function init() {
  if (lightbox.value) return

  lightbox.value = new PhotoSwipeLightbox({
    ...forwardedProps.value,
    pswpModule: () => import('photoswipe'),
  })

  new PhotoSwipeVideoPlugin(lightbox.value)

  lightbox.value.init()
}

function destroy() {
  if (!lightbox.value) return

  lightbox.value.destroy()
  lightbox.value = null
}

onMounted(init)
onBeforeMount(destroy)
</script>
