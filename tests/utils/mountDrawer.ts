import { Drawer } from '~/components/Shared/Drawer'
import { flushPromises, mount } from '@vue/test-utils'
import useTeleportsElement from '~/tests/utils/useTeleportsElement'

export default async function(slot?: Component) {
  const Component = defineComponent({
    components: {
      Drawer,
    },
    template: `
      <Drawer>
        <slot />
      </Drawer>
    `,
    setup() {
      const { create, clear } = useTeleportsElement()

      onBeforeMount(create)
      onUnmounted(clear)
    },
  })

  const wrapper = mount(Component, { props: { open: true }, slots: { default: slot ? () => h(slot) : '' } })

  await flushPromises()

  return wrapper
}
