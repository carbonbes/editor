import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, test } from 'vitest'
import type Editor from '~/components/Editor/Editor.client.vue'

describe('useDragGesture', () => {
  test('should be defined', () => {
    expect(useDragGesture).toBeDefined()
  })

  describe('gesture', () => {
    let dragGesture: ReturnType<typeof useDragGesture>['gesture']
    let wrapper: ReturnType<typeof mount<typeof Editor>>

    function mountComponent() {
      const Component = defineComponent({
        template: '<div ref="element"></div>',

        setup() {
          const element = useTemplateRef('element')

          const { gesture } = useDragGesture({
            element: element as Ref<Element>,
            handlers: {},
          })

          dragGesture = gesture
        },
      })

      wrapper = mount(Component)
    }

    beforeEach(() => {
      mountComponent()
    })

    afterEach(() => {
      wrapper.unmount()
    })

    test('must be defined after some component has been mounted', () => {
      expect(dragGesture.value).toBeDefined()
    })

    test('must be undefined after some component has been unmounted', () => {
      expect(dragGesture.value).toBeDefined()

      wrapper.unmount()

      expect(dragGesture.value).toBeUndefined()
    })
  })
})
