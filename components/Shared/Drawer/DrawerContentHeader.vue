<template>
  <Flex items-center class="p-6">
    <p v-if="title" class="text-xl font-bold">
      {{ title }}
    </p>

    <Flex
      center
      as-child
      class="ml-auto p-1.5 rounded-full bg-gray-200/50"
    >
      <button @click="updateState({ open: false })">
        <Icon name="tabler:x" class="size-5" />
      </button>
    </Flex>
  </Flex>
</template>

<script setup lang="ts">
import Flex from '~/components/Shared/Flex.vue'
import { drawerContextKey } from '~/keys'

const { title } = defineProps<{ title?: string }>()

const { updateState } = inject(drawerContextKey)
</script>
