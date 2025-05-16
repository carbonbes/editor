<template>
  <BaseFloating class="p-1 rounded-2xl">
    <div class="flex items-center gap-1">
      <slot />
    </div>
  </BaseFloating>
</template>

<script setup lang="ts">
import BaseFloating from '~/components/Shared/BaseFloating.vue'
</script>
