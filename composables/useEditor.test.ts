import { flushPromises } from '@vue/test-utils'
import { afterEach, describe, expect, test } from 'vitest'

describe('useEditor', () => {
  test('should be defined', () => {
    expect(useEditor()).toBeDefined()
  })

  describe('editor', () => {
    const { editor, init, destroy } = useEditor()

    afterEach(() => {
      destroy()
    })

    test('should be defined', () => {
      expect(editor).toBeDefined()
    })

    test('must be undefined before editor init', () => {
      expect(editor.value).toBeUndefined()
    })

    test('must be defined after editor init', () => {
      init()

      expect(editor.value).toBeDefined()
    })

    test('must be undefined after editor destroy', () => {
      init()

      expect(editor.value).toBeDefined()

      destroy()

      expect(editor.value).toBeUndefined()
    })
  })

  describe('isInitialized', () => {
    const { isInitialized, init } = useEditor()

    test('should be defined', () => {
      expect(isInitialized).toBeDefined()
    })

    test('must be false before editor init', () => {
      expect(isInitialized.value).toBe(false)
    })

    test('must be true after editor init', () => {
      init()

      expect(isInitialized.value).toBe(true)
    })
  })
})
