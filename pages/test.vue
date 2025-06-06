<template>
  <div>
    <button @click="open = true">Открыть</button>

    <LightboxRoot v-model:open="open">
      <LightboxPortal to="#teleports">
        <LightboxOverlay class="fixed inset-0 bg-black/25 backdrop-blur-xs" />

        <LightboxContent aria-describedby="" class="fixed inset-0">
          <VisuallyHidden>
            <DialogTitle />
          </VisuallyHidden>

          <div class="absolute inset-0 m-4 flex flex-col">
            <div class="flex justify-between">
              <div class="text-lg text-white font-medium">
                <LightboxActiveItemIndex as="span" />
                /
                <LightboxItemsCount as="span" />
              </div>

              <LightboxClose as-child class="z-[2]">
                <BaseButton>
                  <CrossIcon class="!size-10 text-white" />
                </BaseButton>
              </LightboxClose>
            </div>

            <div class="flex items-center justify-between">
              <LightboxPrevious class="z-[2]">
                <ChevronIcon left class="!size-10 text-white" />
              </LightboxPrevious>

              <LightboxNext class="z-[2]">
                <ChevronIcon right class="!size-10 text-white" />
              </LightboxNext>
            </div>
          </div>

          <LightboxItems :loop="true" class="absolute inset-0">
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
  </div>
</template>

<script setup lang="ts">
import {
  LightboxActiveItemIndex,
  LightboxClose,
  LightboxContent,
  LightboxItem,
  LightboxItems,
  LightboxItemsCount,
  LightboxNext,
  LightboxOverlay,
  LightboxPortal,
  LightboxPrevious,
  LightboxRoot,
} from '~/components/Shared/Lightbox'
import { ChevronIcon, CrossIcon } from '~/components/Shared/Icons'
import { BaseButton } from '~/components/Shared/Base'
import { DialogTitle, VisuallyHidden } from 'reka-ui'

const open = ref(false)
</script>
