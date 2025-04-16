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

type DragGestureHandlers = {
  onDragStart?: DragGestureHandler
  onDrag?: DragGestureHandler
  onDragEnd?: DragGestureHandler
}

type DragGestureConfig = DragConfig

type InputArgs = {
  element: Ref<Element>
  handlers: DragGestureHandlers
  config?: DragGestureConfig
}

export default function ({ element, handlers, config }: InputArgs) {
  const gesture = useState<Gesture | undefined>()

  const unwatch = watch(element, (el) => {
    if (el) {
      init()
      unwatch()
    }
  })

  async function init() {
    if (!element.value) return

    gesture.value = new Gesture(element.value, handlers, {
      drag: config,
    })
  }

  function destroy() {
    if (!gesture.value) return

    gesture.value.destroy()
    gesture.value = undefined
  }

  onMounted(init)
  onBeforeUnmount(destroy)
}
