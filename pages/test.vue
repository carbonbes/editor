<template>
  <button @click="open = true">Открыть</button>

  <Drawer v-model:open="open" :snap-points="[0.5, 1]" :active-snap-point="0.5" :fade-from-index="0">
    <DrawerPortal to="#teleports">
      <DrawerOverlay />

      <DrawerBody>
        <DrawerHeader class="p-6" />

        <DrawerContent>
          <div class="px-6 pb-6 flex flex-col">
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
          </div>
        </DrawerContent>
      </DrawerBody>
    </DrawerPortal>
  </Drawer>
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

const open = ref(false)
</script>
