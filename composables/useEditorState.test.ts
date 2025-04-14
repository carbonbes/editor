import type { Editor } from '@tiptap/vue-3'
import { describe, expect, test } from 'vitest'
import type { ShallowRef } from 'vue'
import { EditorKey } from '~/keys'
import useInjectedSetup from '~/utils/useInjectedSetup'

function useEditorStateTest(editor: ShallowRef<Partial<Editor> | undefined>) {
  return useInjectedSetup(
    () => useEditorState(),
    [{ key: EditorKey, value: editor }]
  )
}

describe('useEditorState', () => {
  test('should be defined', () => {
    expect(useEditorStateTest).toBeDefined()
  })

  describe('ready', () => {
    function createTestEditor(initialized: boolean = false) {
      const editor = shallowRef<Partial<Editor> | undefined>(
        initialized ? { isInitialized: true } : undefined
      )

      const { isReady, unmount } = useEditorStateTest(editor)

      return { editor, isReady, unmount }
    }

    test('must be false before editor init', () => {
      const { isReady, unmount } = createTestEditor(false)

      expect(isReady.value).toBe(false)

      unmount()
    })

    test('must be true after editor init', () => {
      const { isReady, unmount } = createTestEditor(true)

      expect(isReady.value).toBe(true)

      unmount()
    })
  })
})
