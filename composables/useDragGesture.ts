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

interface DragGestureHandlers {
  onDragStart?: DragGestureHandler
  onDrag?: DragGestureHandler
  onDragEnd?: DragGestureHandler
}

type DragGestureConfig = DragConfig

interface UseDragGestureOptions {
  target: DragGestureTarget
  handlers: DragGestureHandlers
  config?: DragGestureConfig
}

export function useDragGesture({
  target,
  handlers,
  config,
}: UseDragGestureOptions) {
  const gesture = ref<Gesture | null>(null)

  function init() {
    if (gesture.value) return

    gesture.value = new Gesture(target.value as EventTarget, handlers, {
      drag: config,
    })
  }

  function destroy() {
    if (!gesture.value) return

    gesture.value.destroy()
    gesture.value = null
  }

  const unwatch = watch(target, (target) => {
    if (target) {
      init()
      unwatch()
    }
  })

  onBeforeUnmount(destroy)

  return { gesture, init, destroy }
}
