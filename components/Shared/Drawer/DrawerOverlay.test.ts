import { describe, expect, test } from 'vitest'
import { DrawerOverlay } from '~/components/Shared/Drawer'
import mountDrawer from '~/tests/utils/mountDrawer'

describe('DrawerOverlay', () => {
  test('should be defined', () => {
    expect(DrawerOverlay).toBeDefined()
  })

  test('should display correctly', async () => {
    const drawer = await mountDrawer(DrawerOverlay)
    const drawerOverlay = drawer.getComponent(DrawerOverlay)

    expect(drawerOverlay.html()).toMatchSnapshot()

    drawer.unmount()
  })
})
