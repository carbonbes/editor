<template>
  <LightboxRoot v-model:open="open">
    <LightboxTrigger>
      <button>Открыть</button>
    </LightboxTrigger>

    <LightboxPortal to="#teleports">
      <LightboxOverlay />

      <LightboxContent aria-describedby="">
        <LightboxIndex class="m-4 text-lg text-white" />

        <LightboxControlsOverlay class="mx-4">
          <div class="size-full flex items-center justify-between">
            <LightboxPrevious class="z-[2]">
              <ChevronIcon left class="!size-12 text-white" />
            </LightboxPrevious>

            <LightboxNext class="z-[2]">
              <ChevronIcon right class="!size-12 text-white" />
            </LightboxNext>
          </div>
        </LightboxControlsOverlay>

        <LightboxItems :loop="true">
          <LightboxItem class="flex items-center justify-center">
            Первый слайд
          </LightboxItem>

          <LightboxItem class="flex items-center justify-center">
            Второй слайд
          </LightboxItem>
        </LightboxItems>
      </LightboxContent>
    </LightboxPortal>
  </LightboxRoot>
</template>

<script setup lang="ts">
import {
  LightboxContent,
  LightboxControlsOverlay,
  LightboxIndex,
  LightboxItem,
  LightboxItems,
  LightboxNext,
  LightboxOverlay,
  LightboxPortal,
  LightboxPrevious,
  LightboxRoot,
  LightboxTrigger,
} from '~/components/Shared/Lightbox'
import { ChevronIcon } from '~/components/Shared/Icons'

const open = ref(false)
</script>
