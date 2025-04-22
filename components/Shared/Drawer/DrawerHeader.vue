<template>
  <Flex items-center :class="{ 'shadow': YScrollOffset > 0 }">
    <slot />

    <Flex
      center
      as-child
      class="ml-auto p-1.5 rounded-full bg-gray-200/50"
    >
      <DrawerClose as-child>
        <button>
          <Icon name="tabler:x" class="size-5" />
        </button>
      </DrawerClose>
    </Flex>
  </Flex>
</template>

<script setup lang="ts">
import Flex from '~/components/Shared/Flex.vue'
import { DrawerClose } from 'vaul-vue'
import { injectDrawerContext } from './Drawer.vue'

const { YScrollOffset } = injectDrawerContext()
</script>
