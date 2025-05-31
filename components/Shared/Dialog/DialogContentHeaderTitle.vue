<template>
  <DialogTitle as-child>
    <ModalTitle>
      <slot />
    </ModalTitle>
  </DialogTitle>
</template>

<script setup lang="ts">
import { DialogTitle } from 'reka-ui'
import { ModalTitle } from '~/components/Shared/Modal'
</script>
