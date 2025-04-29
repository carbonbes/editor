import { describe, expect, test } from 'vitest'

describe('useEditorNodeMenuBottomsheet', () => {
  test('should be defined', () => {
    expect(useEditorNodeMenuBottomsheet).toBeDefined()
  })

  describe('open', () => {
    const { open } = useEditorNodeMenuBottomsheet({ direction: 'left', threshold: 0 })

    test('should be defined', () => {
      expect(open).toBeDefined()
    })

    test('should be "false" by default', () => {
      expect(open.value).toBeFalsy()
    })
  })
})
