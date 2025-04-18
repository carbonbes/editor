<template>
  <button @click="open = true">Открыть</button>

  <Drawer v-model:open="open" :snap-points="[0.5, 1]" :fade-from-index="0">
    <DrawerContent>
      <DrawerContentHeader />

      <Flex class="px-6">
        Тест
      </Flex>
    </DrawerContent>
  </Drawer>
</template>

<script setup lang="ts">
import Drawer from '~/components/Shared/Drawer/Drawer.vue'
import DrawerContent from '~/components/Shared/Drawer/DrawerContent.vue'
import DrawerContentHeader from '~/components/Shared/Drawer/DrawerContentHeader.vue'
import Flex from '~/components/Shared/Flex.vue'

const open = ref(false)
</script>
