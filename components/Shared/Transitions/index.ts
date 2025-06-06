export interface BaseTransitionProps {
  duration?: number
}

export interface TransitionBetweenProps extends BaseTransitionProps {
  index: number
}

export { default as TransitionBetween } from './TransitionBetween.vue'

export {
  default as TransitionFade,
  type TransitionFadeProps,
} from './TransitionFade.vue'
