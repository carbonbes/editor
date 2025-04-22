import { describe, expect, test } from 'vitest'
import { DrawerContent } from './'
import mountDrawer from '~/tests/utils/mountDrawer'

describe('DrawerContent', () => {
  test('should be defined', () => {
    expect(DrawerContent).toBeDefined()
  })

  describe('should display', () => {
    test('correctly without the slot', async () => {
      const DrawerContentComponent = defineComponent({
        components: {
          DrawerContent,
        },
        template: '<DrawerContent></DrawerContent>',
      })

      const wrapper = await mountDrawer(DrawerContentComponent)

      const drawerContent = wrapper.getComponent(DrawerContent)

      expect(drawerContent.html()).toMatchSnapshot()

      wrapper.unmount()
    })

    test('correctly with the slot', async () => {
      const DrawerContentComponent = defineComponent({
        components: { DrawerContent },
        template: `
          <DrawerContent>
            <p>Test</p>
          </DrawerContent>
        `,
      })

      const wrapper = await mountDrawer(DrawerContentComponent)

      const drawerContent = wrapper.getComponent(DrawerContent)

      expect(drawerContent.html()).toMatchSnapshot()

      wrapper.unmount()
    })
  })
})
