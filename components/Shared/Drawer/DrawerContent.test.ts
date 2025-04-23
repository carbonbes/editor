import { describe, expect, test } from 'vitest'
import { DrawerContent } from './'
import mountDrawer from '~/tests/utils/mountDrawer'

describe('DrawerContent', () => {
  test('should be defined', () => {
    expect(DrawerContent).toBeDefined()
  })

  describe('should display', () => {
    function createDrawerContent(slot?: string) {
      return defineComponent({
        components: { DrawerContent },
        template: `
          <DrawerContent>
            ${slot ? slot : ''}
          </DrawerContent>
        `,
      })
    }

    test('correctly without the slot', async () => {
      const DrawerContentComponent = createDrawerContent()
      const drawer = await mountDrawer(DrawerContentComponent)
      const drawerContent = drawer.getComponent(DrawerContent)

      expect(drawerContent.html()).toMatchSnapshot()

      drawer.unmount()
    })

    test('correctly with the slot', async () => {
      const DrawerContentComponent = createDrawerContent('<p>Test</p>')
      const drawer = await mountDrawer(DrawerContentComponent)
      const drawerContent = drawer.getComponent(DrawerContent)

      expect(drawerContent.html()).toMatchSnapshot()

      drawer.unmount()
    })
  })
})
