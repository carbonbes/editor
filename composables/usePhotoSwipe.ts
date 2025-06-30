import type { PhotoSwipeOptions } from 'photoswipe'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'

export type UsePhotoSwipeOptions = PhotoSwipeOptions

export interface UsePhotoSwipeReturn {
  lightbox: Ref<PhotoSwipeLightbox | null>
}

export function usePhotoSwipe(
  options: UsePhotoSwipeOptions,
): UsePhotoSwipeReturn {
  const lightbox = useState<PhotoSwipeLightbox | null>(() => null)

  function init() {
    if (lightbox.value) return

    lightbox.value = new PhotoSwipeLightbox({
      ...options,
      pswpModule: () => import('photoswipe'),
    })

    lightbox.value.init()
  }

  function destroy() {
    if (!lightbox.value) return

    lightbox.value.destroy()
    lightbox.value = null
  }

  onMounted(init)
  onBeforeMount(destroy)

  return { lightbox }
}
