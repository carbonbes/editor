import type { PrimitiveProps } from 'reka-ui'
import type {
  SwiperContainerEmits,
  SwiperContainerProps,
} from '~/components/Shared/Swiper'

export type LightboxItemsProps = SwiperContainerProps
export type LightboxItemsEmits = SwiperContainerEmits
export type LightboxIndexProps = PrimitiveProps

export { default as LightboxClose } from './LightboxClose.vue'
export { default as LightboxContent } from './LightboxContent.vue'
export { default as LightboxControlsOverlay } from './LightboxControlsOverlay.vue'
export { default as LightboxIndex } from './LightboxIndex.vue'
export { default as LightboxItem } from './LightboxItem.vue'
export { default as LightboxItems } from './LightboxItems.vue'
export { default as LightboxNext } from './LightboxNext.vue'
export { default as LightboxOverlay } from './LightboxOverlay.vue'
export { default as LightboxPortal } from './LightboxPortal.vue'
export { default as LightboxPrevious } from './LightboxPrevious.vue'
export { default as LightboxRoot } from './LightboxRoot.vue'
export { default as LightboxTrigger } from './LightboxTrigger.vue'
