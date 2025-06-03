<template>
  <LightboxRoot v-model:open="open">
    <LightboxTrigger>
      <button>Открыть</button>
    </LightboxTrigger>

    <LightboxPortal to="#teleports">
      <LightboxOverlay />

      <LightboxContent aria-describedby="" class="flex items-center">
        <LightboxTitle />

        <LightboxPrevious class="absolute left-0 z-[2]">
          <ChevronIcon left class="!size-10 text-white" />
        </LightboxPrevious>

        <LightboxItems>
          <LightboxItem>Первый слайд</LightboxItem>

          <LightboxItem>Второй слайд</LightboxItem>
        </LightboxItems>

        <LightboxNext class="absolute right-0 z-[2]">
          <ChevronIcon right class="!size-10 text-white" />
        </LightboxNext>
      </LightboxContent>
    </LightboxPortal>
  </LightboxRoot>
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
  LightboxTrigger,
} from '~/components/Shared/Lightbox'
import { ChevronIcon } from '~/components/Shared/Icons'

const open = ref(false)
</script>
