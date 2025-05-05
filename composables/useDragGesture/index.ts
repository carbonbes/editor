import {
  type DragConfig,
  type EventTypes,
  type FullGestureState,
  Gesture,
} from '@use-gesture/vanilla'

export type DragGestureState = Omit<FullGestureState<'drag'>, 'event'> & {
  event: EventTypes['drag']
}

type DragGestureHandler = (state: DragGestureState) => void

type DragGestureTarget = Ref<Element | null> | Ref<Element | undefined>

type DragGestureHandlers = {
  onDragStart?: DragGestureHandler
  onDrag?: DragGestureHandler
  onDragEnd?: DragGestureHandler
}

type DragGestureConfig = DragConfig

type InputArgs = {
  target: DragGestureTarget
  handlers: DragGestureHandlers
  config?: DragGestureConfig
}

export function useDragGesture({ target, handlers, config }: InputArgs) {
  const gesture = useState<Gesture | undefined>()

  function init() {
    gesture.value = new Gesture(target.value as EventTarget, handlers, {
      drag: config,
    })
  }

  function destroy() {
    if (!gesture.value) return

    gesture.value.destroy()
    gesture.value = undefined
  }

  const unwatch = watch(target, (target) => {
    if (target) {
      init()
      unwatch()
    }
  })

  onBeforeUnmount(destroy)

  return { gesture }
}
