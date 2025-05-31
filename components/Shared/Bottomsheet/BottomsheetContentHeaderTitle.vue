<template>
  <DialogTitle as-child>
    <ModalTitle>
      <slot />
    </ModalTitle>
  </DialogTitle>
</template>

<script lang="ts" setup>
import { DialogTitle } from 'reka-ui'
import ModalTitle from '~/components/Shared/Modal/ModalTitle.vue'
</script>
