import { HorizontalRule } from '@tiptap/extension-horizontal-rule'

export const HorizontalRuleNode = HorizontalRule.extend({
  content: 'horizontalRule',

  parseHTML() {
    return [{ tag: 'hr' }, { tag: 'div[data-type="horizontalRule"]' }]
  },

  renderHTML() {
    return ['div', { 'data-type': 'horizontalRule' }, ['hr']]
  },
})
