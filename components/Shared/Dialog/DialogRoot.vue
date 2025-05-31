<template>
  <DialogRoot v-bind="forwarded" v-model:open="open">
    <slot />
  </DialogRoot>
</template>

<script setup lang="ts">
import {
  createContext,
  DialogRoot,
  type DialogRootEmits,
  type DialogRootProps,
  useForwardPropsEmits,
} from 'reka-ui'

const props = defineProps<DialogRootProps>()
const emits = defineEmits<DialogRootEmits>()
const forwarded = useForwardPropsEmits(props, emits)

const open = defineModel<boolean>('open', { default: false })

provideDialogContext({ open })
</script>

<script lang="ts">
export interface DialogContext {
  open: Ref<boolean>
}

export const [injectDialogContext, provideDialogContext] =
  createContext<DialogContext>('Dialog')
</script>
