import { describe, expect, test } from 'vitest'
import { DrawerBody, DrawerHeader } from '~/components/Shared/Drawer'
import mountDrawer from '~/tests/utils/mountDrawer'

describe('DrawerHeader', () => {
  test('should be defined', () => {
    expect(DrawerHeader).toBeDefined()
  })

  describe('renders', () => {
    function createDrawerHeader(slot?: string) {
      return defineComponent({
        components: { DrawerBody, DrawerHeader },
        template: `
          <DrawerBody>
            <DrawerHeader>
              ${slot ? slot : ''}
            </DrawerHeader>
          </DrawerBody>
        `,
      })
    }

    test('correctly without the slot', async () => {
      const DrawerHeaderComponent = createDrawerHeader()
      const drawer = await mountDrawer(DrawerHeaderComponent)
      const drawerHeader = drawer.getComponent(DrawerHeader)

      expect(drawerHeader.html()).toMatchSnapshot()

      drawer.unmount()
    })

    test('correctly with the slot', async () => {
      const DrawerHeaderComponent = createDrawerHeader('<p>Test</p>')
      const drawer = await mountDrawer(DrawerHeaderComponent)
      const drawerHeader = drawer.getComponent(DrawerHeader)

      expect(drawerHeader.html()).toMatchSnapshot()

      drawer.unmount()
    })
  })
})
