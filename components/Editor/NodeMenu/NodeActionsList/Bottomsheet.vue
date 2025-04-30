<template>
  <Bottomsheet v-model:open="open">
    <BottomsheetHeader />

    <BottomsheetContent />
  </Bottomsheet>
</template>

<script setup lang="ts">
import { Bottomsheet, BottomsheetContent, BottomsheetHeader } from '~/components/Editor/NodeMenu/Bottomsheet'

const { open } = useEditorNodeMenuBottomsheet({
  directionTrigger: 'left', threshold: 75,
})
</script>
