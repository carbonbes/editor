import { describe, expect, test } from 'vitest'
import { DrawerHeader } from './'
import mountDrawer from '~/tests/utils/mountDrawer'

describe('DrawerHeader', () => {
  const template = `
    <DrawerBody>
      <DrawerHeader>
        <slot />
      </DrawerHeader>
    </DrawerBody>
  `

  test('should be defined', () => {
    expect(DrawerHeader).toBeDefined()
  })

  test('should be displayed without the slot', async () => {
    const wrapper = await mountDrawer({ template })
    const header = wrapper.getComponent(DrawerHeader)

    expect(header.html()).toMatchSnapshot()

    wrapper.unmount()
  })

  test('should be displayed with a slot', async () => {
    const Content = defineComponent({
      template: `
        <p>Test</p>
      `,
    })

    const wrapper = await mountDrawer({ template, slot: Content })
    const header = wrapper.getComponent(DrawerHeader)

    expect(header.html()).toMatchSnapshot()

    wrapper.unmount()
  })

  test('must have a close button', async () => {
    const wrapper = await mountDrawer({ template })
    const header = wrapper.getComponent(DrawerHeader)
    const button = header.get('button')

    expect(button).toBeDefined()

    wrapper.unmount()
  })

  test('clicking on the close button should close the Drawer', async () => {
    const wrapper = await mountDrawer({ template })
    const header = wrapper.getComponent(DrawerHeader)
    const button = header.get('button')

    expect(wrapper.vm.open).toBe(true)

    await button.trigger('click')

    expect(wrapper.vm.open).toBe(false)

    wrapper.unmount()
  })
})
