<template>
  <BaseButton
    as="button"
    class="p-1.5 bg-white shadow rounded-xl cursor-pointer [&>.iconify]:!size-6"
  >
    <slot />
  </BaseButton>
</template>

<script setup lang="ts">
import BaseButton from '~/components/Shared/Base/BaseButton.vue'
</script>
