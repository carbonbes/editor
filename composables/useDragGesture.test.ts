import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'

describe('useDragGesture', () => {
  test('should be defined', () => {
    expect(useDragGesture).toBeDefined()
  })

  describe('gesture', () => {
    function mountComponent() {
      let result: ReturnType<typeof useDragGesture>

      const Component = defineComponent({
        template: '<div ref="element"></div>',
        setup() {
          const element = useTemplateRef<Element>('element')

          result = useDragGesture({ element, handlers: {} })
        },
      })

      const wrapper = mount(Component)

      return { result, wrapper }
    }

    test('must be defined after some component has been mounted', () => {
      const {
        result: { gesture },
        wrapper,
      } = mountComponent()

      expect(gesture.value).toBeDefined()

      wrapper.unmount()
    })

    test('must be undefined after some component has been unmounted', () => {
      const {
        result: { gesture },
        wrapper,
      } = mountComponent()

      expect(gesture.value).toBeDefined()

      wrapper.unmount()

      expect(gesture.value).toBeUndefined()
    })
  })
})
