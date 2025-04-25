import { describe, expect, test } from 'vitest'
import { DrawerBody } from './'
import mountDrawer from '~/tests/utils/mountDrawer'

describe('DrawerBody', () => {
  const template = `
    <DrawerBody>
      <slot />
    </DrawerBody>
  `

  test('should be defined', () => {
    expect(DrawerBody).toBeDefined()
  })

  test('should be displayed without the slot', async () => {
    const wrapper = await mountDrawer({ template })
    const body = wrapper.getComponent(DrawerBody)

    expect(body.html()).toMatchSnapshot()

    wrapper.unmount()
  })

  test('should be displayed with a slot', async () => {
    const Content = defineComponent({
      template: `
        <p>Test</p>
      `,
    })

    const wrapper = await mountDrawer({ template, slot: Content })
    const body = wrapper.getComponent(DrawerBody)

    expect(body.html()).toMatchSnapshot()

    wrapper.unmount()
  })
})
