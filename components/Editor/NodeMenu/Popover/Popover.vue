<template>
  <PopoverRoot v-model:open="open">
    <PopoverContent
      align="start"
      side="left"
      :side-offset="16"
      :reference="node || ref()"
      @open-auto-focus="(e) => e.preventDefault()"
      @interact-outside="(e) => e.preventDefault()"
    >
      <div class="flex gap-1">
        <Button ref="">
          <Icon name="tabler:plus" />
        </Button>

        <Button ref="">
          <Icon name="tabler:grip-vertical" />
        </Button>
      </div>
    </PopoverContent>
  </PopoverRoot>
</template>

<script setup lang="ts">
import { PopoverRoot, PopoverContent } from '~/components/Shared/Popover'
import Button from './Button.vue'

const open = ref(false)

const { node } = useEditorNodesCursorTracking()
const { isTouch } = useDevice()

watch(node, (node) => {
  if (isTouch.value) return

  open.value = !!node
})
</script>
