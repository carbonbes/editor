import { describe, expect, test } from 'vitest'
import Button from './Button.vue'
import mountDrawer from '~/tests/utils/mountDrawer'

const drawerTemplate = `
  <DrawerBody>
    <DrawerContent>
      <slot />
    </DrawerContent>
  </DrawerBody>
`

function createButtonComponent(template: string) {
  return defineComponent({
    components: { Button },
    template,
  })
}

describe('Button', () => {
  test('should be defined', () => {
    expect(Button).toBeDefined()
  })

  describe('is displayed correctly', () => {
    const cases = [
      ['without a slot', '<Button></Button>'],
      ['with a slot', '<Button><p>Test</p></Button>'],
      ['with an chevron-right icon', '<Button :next-page-trigger="true"><p>Test</p></Button>'],
    ]

    test.each(cases)('%s', async (_, buttonTemplate) => {
      const ButtonComponent = createButtonComponent(buttonTemplate)
      const drawer = await mountDrawer({ template: drawerTemplate, slot: ButtonComponent })
      const button = drawer.getComponent(Button)

      expect(button.html()).toMatchSnapshot()

      drawer.unmount()
    })
  })

  test('pressing should close the Drawer', async () => {
    const ButtonComponent = createButtonComponent('<Button></Button>')
    const drawer = await mountDrawer({ template: drawerTemplate, slot: ButtonComponent })
    const button = drawer.getComponent(Button)

    await button.trigger('click')

    expect(drawer.vm.open).toBeFalsy()

    drawer.unmount()
  })
})
