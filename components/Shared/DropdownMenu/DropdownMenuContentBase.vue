<template>
  <BaseFloating class="p-1.5 flex flex-col gap-2 rounded-xl">
    <slot />
  </BaseFloating>
</template>

<script setup lang="ts">
import BaseFloating from '~/components/Shared/BaseFloating.vue'
</script>
