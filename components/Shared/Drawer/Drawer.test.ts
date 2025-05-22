import { describe, expect, test } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { DrawerOverlay, DrawerPortal, DrawerRoot } from './'

const Component = defineComponent({
  components: {
    DrawerOverlay,
    DrawerPortal,
    DrawerRoot,
  },
  template: `
    <DrawerRoot>
      <DrawerPortal>
        <DrawerOverlay />
      </DrawerPortal>
    </DrawerRoot>
  `,
})

describe('Drawer', () => {
  test('should render the DrawerOverlay', async () => {
    const wrapper = mount(Component, { props: { open: true } })
    await flushPromises()

    const overlay = wrapper.getComponent(DrawerOverlay)

    expect(overlay.html()).toMatchSnapshot()

    wrapper.unmount()
  })
})
