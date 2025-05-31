import { describe, expect, test } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import {
  BottomsheetContent,
  BottomsheetContentHeader,
  BottomsheetContentHeaderTitle,
  BottomsheetContentScrollable,
  BottomsheetPortal,
  BottomsheetRoot,
} from './'

async function mountBottomsheet(template?: string) {
  const Component = defineComponent({
    components: {
      BottomsheetContent,
      BottomsheetContentHeader,
      BottomsheetContentHeaderTitle,
      BottomsheetContentScrollable,
      BottomsheetPortal,
      BottomsheetRoot,
    },
    template: `
      <BottomsheetRoot v-model:open="open">
        <BottomsheetPortal>
          ${template}
        </BottomsheetPortal>
      </BottomsheetRoot>
    `,
    setup() {
      const open = ref(false)

      return { open }
    },
  })

  const wrapper = mount(Component, { props: { open: true } })

  await flushPromises()

  return wrapper
}

describe('Bottomsheet', () => {
  describe('BottomsheetContent', () => {
    const cases = [
      ['should render without slot', '<BottomsheetContent aria-describedby="" />'],
      [
        'should render with slot',
        '<BottomsheetContent aria-describedby=""><p>Bottomsheet Content Test</p></BottomsheetContent>',
      ],
    ]

    test.each(cases)('%s', async (_, template) => {
      const wrapper = await mountBottomsheet(template)
      const body = wrapper.getComponent(BottomsheetContent)

      expect(body.html()).toMatchSnapshot()

      wrapper.unmount()
    })
  })

  describe('BottomsheetContentHeader', () => {
    const cases = [
      ['should render without slot', '<BottomsheetContentHeader />'],
      [
        'should render with slot',
        '<BottomsheetContentHeader><p>Bottomsheet Content Header Test</p></BottomsheetContentHeader>',
      ],
    ]

    test.each(cases)('%s', async (_, template) => {
      const wrapper = await mountBottomsheet(template)
      const header = wrapper.getComponent(BottomsheetContentHeader)

      expect(header.html()).toMatchSnapshot()

      wrapper.unmount()
    })

    test('must have a close button', async () => {
      const wrapper = await mountBottomsheet('<BottomsheetContentHeader />')
      const header = wrapper.getComponent(BottomsheetContentHeader)
      const button = header.get(
        '[data-testid="bottomsheet-content-header/close-button"]',
      )

      expect(button).toBeDefined()

      wrapper.unmount()
    })

    test('clicking on the close button should close the Bottomsheet', async () => {
      const wrapper = await mountBottomsheet('<BottomsheetContentHeader />')
      const header = wrapper.getComponent(BottomsheetContentHeader)
      const button = header.get(
        '[data-testid="bottomsheet-content-header/close-button"]',
      )

      expect(wrapper.vm.open).toBe(true)

      await button.trigger('click')

      expect(wrapper.vm.open).toBe(false)

      wrapper.unmount()
    })
  })

  describe('BottomsheetContentHeaderTitle', () => {
    const cases = [
      ['should render without slot', '<BottomsheetContentHeaderTitle />'],
      [
        'should render with slot',
        '<BottomsheetContentHeaderTitle><p>Test</p></BottomsheetContentHeaderTitle>',
      ],
    ]

    test.each(cases)('%s', async (_, template) => {
      const wrapper = await mountBottomsheet(template)
      const title = wrapper.getComponent(BottomsheetContentHeaderTitle)

      expect(title.html()).toMatchSnapshot()

      wrapper.unmount()
    })
  })

  describe('BottomsheetContentScrollable', () => {
    const cases = [
      ['should render without slot', '<BottomsheetContentScrollable />'],
      [
        'should render with slot',
        '<BottomsheetContentScrollable><p>Test</p></BottomsheetContentScrollable>',
      ],
    ]

    test.each(cases)('%s', async (_, template) => {
      const wrapper = await mountBottomsheet(template)
      const content = wrapper.getComponent(BottomsheetContentScrollable)

      expect(content.html()).toMatchSnapshot()

      wrapper.unmount()
    })
  })
})
