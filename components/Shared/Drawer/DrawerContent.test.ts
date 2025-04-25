import { describe, expect, test } from 'vitest'
import { DrawerContent } from '~/components/Shared/Drawer/index'
import mountDrawer from '~/tests/utils/mountDrawer'

describe('DrawerContent', () => {
  const template = `
    <DrawerBody>
      <DrawerContent>
        <slot />
      </DrawerContent>
    </DrawerBody>
  `

  test('should be defined', () => {
    expect(DrawerContent).toBeDefined()
  })

  test('should be displayed without the slot', async () => {
    const wrapper = await mountDrawer({ template })
    const content = wrapper.getComponent(DrawerContent)

    expect(content.html()).toMatchSnapshot()

    wrapper.unmount()
  })

  test('should be displayed with a slot', async () => {
    const Content = defineComponent({
      template: `
        <p>Test</p>
      `,
    })

    const wrapper = await mountDrawer({ template, slot: Content })
    const content = wrapper.getComponent(DrawerContent)

    expect(content.html()).toMatchSnapshot()

    wrapper.unmount()
  })
})
