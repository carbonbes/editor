<template>
  <button @click="open = true">Открыть</button>

  <ClientOnly>
    <Drawer v-model:open="open" :snap-points="[0.5, 1]" :fadeFromIndex="0">
      <DrawerPortal to="#teleports">
        <DrawerOverlay />

        <DrawerBody>
          <DrawerHeader class="p-6" />

          <DrawerContent>
            <Flex col class="px-6 pb-6">
              <div>Тест</div>
              <div>Тест</div>
              <div>Тест</div>
              <div>Тест</div>
              <div>Тест</div>
              <div>Тест</div>
              <div>Тест</div>
              <div>Тест</div>
              <div>Тест</div>
              <div>Тест</div>
              <div>Тест</div>
              <div>Тест</div>
              <div>Тест</div>
              <div>Тест</div>
              <div>Тест</div>
              <div>Тест</div>
              <div>Тест</div>
              <div>Тест</div>
              <div>Тест</div>
              <div>Тест</div>
              <div>Тест</div>
              <div>Тест</div>
              <div>Тест</div>
              <div>Тест</div>
              <div>Тест</div>
              <div>Тест</div>
              <div>Тест</div>
              <div>Тест</div>
              <div>Тест</div>
              <div>Тест</div>
              <div>Тест</div>
              <div>Тест</div>
              <div>Тест</div>
              <div>Тест</div>
              <div>Тест</div>
              <div>Тест</div>
              <div>Тест</div>
              <div>Тест</div>
              <div>Тест</div>
              <div>Тест</div>
              <div>Тест</div>
              <div>Тест</div>
              <div>Тест</div>
              <div>Тест</div>
              <div>Тест</div>
              <div>Тест</div>
              <div>Тест</div>
              <div>Тест</div>
            </Flex>
          </DrawerContent>
        </DrawerBody>
      </DrawerPortal>
    </Drawer>
  </ClientOnly>
</template>

<script setup lang="ts">
import {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
} from '~/components/Shared/Drawer'
import Flex from '~/components/Shared/Flex.vue'

const open = ref(false)
</script>
