import type { Content } from '@tiptap/vue-3'
import { flushPromises, mount } from '@vue/test-utils'
import Editor from '~/components/Editor/Editor.client.vue'

export type Editor = typeof Editor

export default async function (content?: Content) {
  const wrapper = mount(Editor, { props: { content } })

  await flushPromises()

  return wrapper
}
