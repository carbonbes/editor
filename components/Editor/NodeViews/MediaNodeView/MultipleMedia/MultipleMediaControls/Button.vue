<template>
  <BaseButton
    class="p-2 bg-white shadow rounded-xl cursor-pointer [&>.iconify]:!size-6"
  >
    <slot />
  </BaseButton>
</template>

<script setup lang="ts">
import BaseButton from '~/components/Shared/Base/BaseButton.vue'
</script>
