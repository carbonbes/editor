import { afterEach, beforeEach, describe, expect, test } from 'vitest'
import mountEditor from '~/tests/utils/mountEditor'

describe('useEditorCommands', () => {
  test('should be defined', () => {
    expect(useEditorCommands).toBeDefined()
  })

  describe('setNodeHtmlAttrs', () => {
    const { setNodeHtmlAttrs } = useEditorCommands()

    test('should be defined', () => {
      expect(setNodeHtmlAttrs).toBeDefined()
    })

    describe('', async () => {
      let wrapper: Awaited<ReturnType<typeof mountEditor>>
      let node: ReturnType<typeof wrapper.get>
      let nodeClasses: string | null
      let nodeStyles: string | null

      const dataTestId = 'test'
      const values = { classes: 'test', styles: 'background-color: red;' }

      beforeEach(async () => {
        wrapper = await mountEditor(`<p data-test-id="${dataTestId}">Test</p>`)
        node = wrapper.get(`[data-test-id="${dataTestId}"]`)

        setNodeHtmlAttrs(0, { ...values })

        nodeClasses = node.classes()[0]
        nodeStyles = node.attributes().style
      })

      afterEach(() => {
        wrapper.unmount()

        nodeClasses = null
        nodeStyles = null
      })

      test('The class and style of the specified node matches the class and style assigned to it', async () => {
        expect(nodeClasses).toBe(values.classes)
        expect(nodeStyles).toBe(values.styles)
      })

      test('The class and style of the specified node is cleared from the assigned value', async () => {
        expect(nodeClasses).toBe(values.classes)
        expect(nodeStyles).toBe(values.styles)

        setNodeHtmlAttrs(0, { classes: '', styles: '' })
        nodeClasses = null
        nodeStyles = null

        expect(nodeClasses).toBeNull()
        expect(nodeStyles).toBeNull()
      })
    })
  })
})
