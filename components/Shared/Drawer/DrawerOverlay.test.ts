import { describe, expect, test } from 'vitest'
import { DrawerOverlay } from './'
import mountDrawer from '~/tests/utils/mountDrawer'

describe('DrawerOverlay', () => {
  const template = `
    <DrawerOverlay />
  `

  test('should be defined', () => {
    expect(DrawerOverlay).toBeDefined()
  })

  test('should be displayed', async () => {
    const wrapper = await mountDrawer({ template })
    const overlay = wrapper.getComponent(DrawerOverlay)

    expect(overlay.html()).toMatchSnapshot()

    wrapper.unmount()
  })
})
