<template>
  <div>
    <button @click="open = true">Открыть</button>

    <LightboxRoot v-model:open="open">
      <LightboxPortal to="#teleports">
        <LightboxOverlay />

        <LightboxContent aria-describedby="" class="flex items-center">
          <LightboxTitle />

          <LightboxPrevious class="absolute left-0 z-[2]">
            <ChevronIcon left />
          </LightboxPrevious>

          <LightboxItems>
            <LightboxItem>Первый слайд</LightboxItem>

            <LightboxItem>Второй слайд</LightboxItem>
          </LightboxItems>

          <LightboxNext class="absolute right-0 z-[2]">
            <ChevronIcon right />
          </LightboxNext>
        </LightboxContent>
      </LightboxPortal>
    </LightboxRoot>
  </div>
</template>

<script setup lang="ts">
import {
  LightboxContent,
  LightboxItem,
  LightboxItems,
  LightboxNext,
  LightboxOverlay,
  LightboxPortal,
  LightboxPrevious,
  LightboxRoot,
  LightboxTitle,
} from '~/components/Shared/Lightbox'
import { ChevronIcon } from '~/components/Shared/Icons'

const open = ref(false)
</script>
