<template>
  <Flex items-center>
    <p v-if="title" class="text-xl font-bold">
      {{ title }}
    </p>

    <Flex
      center
      as-child
      class="ml-auto p-1.5 rounded-full bg-gray-200/50"
    >
      <DrawerClose>
        <Icon name="tabler:x" class="size-5" />
      </DrawerClose>
    </Flex>
  </Flex>
</template>

<script setup lang="ts">
import Flex from '~/components/Shared/Flex.vue'
import { DrawerClose } from 'vaul-vue'

const { title } = defineProps<{ title?: string }>()
</script>
