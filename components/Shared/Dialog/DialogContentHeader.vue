<template>
  <Primitive v-bind="forwarded" class="flex items-center justify-between">
    <slot />

    <DialogClose as-child data-testid="dialog-content-header/close-button">
      <ModalClose class="ml-8" />
    </DialogClose>
  </Primitive>
</template>

<script setup lang="ts">
import {
  DialogClose,
  Primitive,
  type PrimitiveProps,
  useForwardProps,
} from 'reka-ui'
import { ModalClose } from '~/components/Shared/Modal'

const props = defineProps<PrimitiveProps>()
const forwarded = useForwardProps(props)
</script>
