import type { Content } from '@tiptap/vue-3'
import { flushPromises, mount } from '@vue/test-utils'
import EditorContent from '~/components/Editor/EditorContent.client.vue'

export default async function (content?: Content) {
  const wrapper = mount(EditorContent, { props: { content } })

  await flushPromises()

  return wrapper
}
