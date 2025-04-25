import {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
} from '~/components/Shared/Drawer'
import { flushPromises, mount } from '@vue/test-utils'
import useTeleportsElement from '~/tests/utils/useTeleportsElement'

export default async function({ template, slot }: {
  template?: string, slot?: Component
}) {
  const Component = defineComponent({
    components: {
      Drawer,
      DrawerPortal,
      DrawerOverlay,
      DrawerBody,
      DrawerHeader,
      DrawerContent,
    },
    template: `
      <Drawer v-model:open="open">
        <DrawerPortal>${template}</DrawerPortal>
      </Drawer>
    `,
    setup() {
      const open = ref(false)

      const { create, remove } = useTeleportsElement()

      onBeforeMount(create)
      onUnmounted(remove)
    },
  })

  const wrapper = mount(Component, { props: { open: true }, slots: { default: slot ? () => h(slot) : '' } })

  await flushPromises()

  return wrapper
}
