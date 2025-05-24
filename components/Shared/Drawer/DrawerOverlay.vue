<template>
  <BaseOverlay as-child>
    <DrawerOverlay class="fixed inset-0" />
  </BaseOverlay>
</template>

<script setup lang="ts">
import { DrawerOverlay } from 'vaul-vue'
import { BaseOverlay } from '~/components/Shared/Base'
</script>
