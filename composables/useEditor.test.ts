import { describe, expect, test } from 'vitest'

describe('useEditor', () => {
  const { editor, init, destroy } = useEditor()

  describe('editor', () => {
    test('should be undefined before editor init', () => {
      expect(editor.value).toBeUndefined()
    })

    test('should be defined after editor init', () => {
      init()

      expect(editor.value).toBeDefined()

      destroy()
    })

    test('should be undefined after editor destroy', () => {
      init()

      expect(editor.value).toBeDefined()

      destroy()

      expect(editor.value).toBeUndefined()
    })

    describe('should be rendered with the specified content', () => {
      test('if the content matches the schema', () => {
        const content = '<h1>Test</h1>'

        init(content)

        expect(editor.value).toBeDefined()
        expect(editor.value?.getHTML()).toBe(content)

        destroy()
      })

      test('if the content does not match the schema', () => {
        const validContent = '<h1>Test</h1>'
        const invalidContent = '<img src="/favicon.ico" />'

        init(validContent + invalidContent)

        expect(editor.value).toBeDefined()
        expect(editor.value?.getHTML()).toBe(validContent)

        destroy()
      })
    })
  })
})
