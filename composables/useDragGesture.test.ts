import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'

describe('useDragGesture', () => {
  describe('gesture', () => {
    const Component = defineComponent({
      template: '<div ref="elementRef" />',

      setup() {
        const elementRef = ref<Element>()

        const { gesture } = useDragGesture({
          target: elementRef,
          handlers: {},
        })

        return { gesture }
      },
    })

    test('should be defined after component has been mounted', () => {
      const wrapper = mount(Component)

      expect(wrapper.vm.gesture).toBeDefined()

      wrapper.unmount()
    })

    test('should be null after component has been unmounted', () => {
      const wrapper = mount(Component)

      expect(wrapper.vm.gesture).toBeDefined()

      wrapper.unmount()

      expect(wrapper.vm.gesture).toBeNull()
    })
  })
})
