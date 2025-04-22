<template>
  <button @click="open = true">Открыть</button>

  <Drawer v-model:open="open" :snap-points="[0.5, 1]" :fade-from-index="0">
    <DrawerHeader class="p-6">
      <Flex items-center class="gap-3">
        <Flex center as-child>
          <button>
            <Icon name="tabler:chevron-left" class="!size-6" />
          </button>
        </Flex>

        <p class="text-xl font-bold overflow-hidden overflow-ellipsis whitespace-nowrap">
          Тестовый заголовок
        </p>
      </Flex>
    </DrawerHeader>

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
  </Drawer>
</template>

<script setup lang="ts">
import Drawer from '~/components/Shared/Drawer/Drawer.vue'
import DrawerHeader from '~/components/Shared/Drawer/DrawerHeader.vue'
import DrawerContent from '~/components/Shared/Drawer/DrawerContent.vue'
import Flex from '~/components/Shared/Flex.vue'

const open = ref(false)
</script>
