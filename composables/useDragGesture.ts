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

type DragGestureTarget = Ref<Element | null | undefined>

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

  async function init() {
    await until(target).toBeTruthy()

    gesture.value = new Gesture(target.value as EventTarget, handlers, {
      drag: config,
    })
  }

  function destroy() {
    gesture.value?.destroy()
    gesture.value = null
  }

  return { gesture, init, destroy }
}
