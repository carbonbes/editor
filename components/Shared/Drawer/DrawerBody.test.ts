import { describe, expect, test } from 'vitest'
import { DrawerBody } from './'
import mountDrawer from '~/tests/utils/mountDrawer'

describe('DrawerBody', () => {
  test('should be defined', () => {
    expect(DrawerBody).toBeDefined()
  })

  describe('should display', () => {
    function createDrawerBody(slot?: string) {
      return defineComponent({
        components: { DrawerBody },
        template: `
          <DrawerBody>
            ${slot ? slot : ''}
          </DrawerBody>
        `,
      })
    }

    test('correctly without the slot', async () => {
      const DrawerBodyComponent = createDrawerBody()
      const drawer = await mountDrawer(DrawerBodyComponent)
      const drawerBody = drawer.getComponent(DrawerBody)

      expect(drawerBody.html()).toMatchSnapshot()

      drawer.unmount()
    })

    test('correctly with the slot', async () => {
      const DrawerBodyComponent = createDrawerBody('<p>Test</p>')
      const drawer = await mountDrawer(DrawerBodyComponent)
      const drawerBody = drawer.getComponent(DrawerBody)

      expect(drawerBody.html()).toMatchSnapshot()

      drawer.unmount()
    })
  })
})
