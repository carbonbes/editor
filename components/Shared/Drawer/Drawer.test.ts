import { describe, expect, test } from 'vitest'
import {
  DrawerRoot,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
} from './'
import { flushPromises, mount } from '@vue/test-utils'

async function mountDrawer(template?: string) {
  const Component = defineComponent({
    components: {
      DrawerRoot,
      DrawerOverlay,
      DrawerPortal,
      DrawerBody,
      DrawerHeader,
      DrawerContent,
    },
    template: `
      <DrawerRoot v-model:open="open">
        <DrawerPortal>
          ${template}
        </DrawerPortal>
      </DrawerRoot>
    `,
    setup() {
      const open = ref(false)
    },
  })

  const wrapper = mount(Component, { props: { open: true } })

  await flushPromises()

  return wrapper
}

describe('Drawer', () => {
  test('should render the DrawerOverlay', async () => {
    const wrapper = await mountDrawer('<DrawerOverlay />')
    const overlay = wrapper.getComponent(DrawerOverlay)

    expect(overlay.html()).toMatchSnapshot()

    wrapper.unmount()
  })

  describe('DrawerBody', () => {
    const cases = [
      ['should render without slot', '<DrawerBody />'],
      ['should render with slot', '<DrawerBody><p>Test</p></DrawerBody>'],
    ]

    test.each(cases)('%s', async (_, template) => {
      const wrapper = await mountDrawer(template)
      const body = wrapper.getComponent(DrawerBody)

      expect(body.html()).toMatchSnapshot()

      wrapper.unmount()
    })
  })

  describe('DrawerHeader', () => {
    const cases = [
      ['should render without slot', '<DrawerHeader />'],
      ['should render with slot', '<DrawerHeader><p>Test</p></DrawerHeader>'],
    ]

    test.each(cases)('%s', async (_, template) => {
      const wrapper = await mountDrawer(template)
      const header = wrapper.getComponent(DrawerHeader)

      expect(header.html()).toMatchSnapshot()

      wrapper.unmount()
    })

    test('must have a close button', async () => {
      const wrapper = await mountDrawer('<DrawerHeader />')
      const header = wrapper.getComponent(DrawerHeader)
      const button = header.get('button')

      expect(button).toBeDefined()

      wrapper.unmount()
    })

    test('clicking on the close button should close the Drawer', async () => {
      const wrapper = await mountDrawer('<DrawerHeader />')
      const header = wrapper.getComponent(DrawerHeader)
      const button = header.get('button')

      expect(wrapper.vm.open).toBe(true)

      await button.trigger('click')

      expect(wrapper.vm.open).toBe(false)

      wrapper.unmount()
    })
  })

  describe('DrawerContent', () => {
    const cases = [
      ['should render without slot', '<DrawerContent />'],
      ['should render with slot', '<DrawerContent><p>Test</p></DrawerContent>'],
    ]

    test.each(cases)('%s', async (_, template) => {
      const wrapper = await mountDrawer(template)
      const content = wrapper.getComponent(DrawerContent)

      expect(content.html()).toMatchSnapshot()

      wrapper.unmount()
    })
  })
})
