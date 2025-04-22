import { describe, expect, test } from 'vitest'
import { DrawerHeader } from './'
import mountDrawer from '~/tests/utils/mountDrawer'

describe('DrawerHeader', () => {
  test('should be defined', () => {
    expect(DrawerHeader).toBeDefined()
  })

  test('should display correctly', async () => {
    const wrapper = await mountDrawer(DrawerHeader)

    const drawerHeader = wrapper.getComponent(DrawerHeader)

    expect(drawerHeader.html()).toMatchSnapshot()

    wrapper.unmount()
  })

  test('must be displayed correctly with the title', async () => {
    const DrawerHeaderComponent = defineComponent({
      components: { DrawerHeader },
      template: '<DrawerHeader title="Test"></DrawerHeader>',
    })

    const wrapper = await mountDrawer(DrawerHeaderComponent)

    const drawerHeader = wrapper.getComponent(DrawerHeader)
    const title = drawerHeader.find('p')

    expect(title.text()).toBe('Test')
  })

  test('the drawer should close after clicking on the close button', async () => {
    const wrapper = await mountDrawer(DrawerHeader)

    const drawerHeader = wrapper.getComponent(DrawerHeader)
    await drawerHeader.find('button').trigger('click')

    expect(wrapper.html()).toBe('')

    wrapper.unmount()
  })
})
