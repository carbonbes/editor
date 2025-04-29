import { describe, expect, test } from 'vitest'
import Buttons from './Buttons.vue'
import { mount } from '@vue/test-utils'

describe('Buttons', () => {
  test('should be defined', () => {
    expect(Buttons).toBeDefined()
  })

  describe('correctly displayed', () => {
    function mountButtons(slot?: string) {
      const Component = defineComponent({
        components: { Buttons },
        template: `
          <Buttons>${slot || ''}</Buttons>
        `,
      })

      return mount(Component)
    }

    const cases = [
      ['without a slot'],
      ['with a slot', '<p>Test</p>'],
    ]

    test.each(cases)('%s', async (_, slot) => {
      const wrapper = mountButtons(slot)

      expect(wrapper.html()).toMatchSnapshot()

      wrapper.unmount()
    })
  })
})
