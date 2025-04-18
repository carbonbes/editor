import { describe, expect, test } from 'vitest'

describe('useEditor', () => {
  test('should be defined', () => {
    expect(useEditor).toBeDefined()
  })

  describe('editor', () => {
    const { editor, init, destroy } = useEditor()

    test('should be defined', () => {
      expect(editor).toBeDefined()
    })

    test('must be undefined before editor init', () => {
      expect(editor.value).toBeUndefined()
    })

    test('must be defined after editor init', () => {
      init()

      expect(editor.value).toBeDefined()

      destroy()
    })

    test('must be undefined after editor destroy', () => {
      init()

      expect(editor.value).toBeDefined()

      destroy()

      expect(editor.value).toBeUndefined()
    })

    test('must be mounted with the specified content', () => {
      const content = '<h1>Test</h1>'

      init(content)

      expect(editor.value).toBeDefined()
      expect(editor.value?.getHTML()).toBe(content)

      destroy()
    })
  })
})
