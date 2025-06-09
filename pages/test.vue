<template>
  <LightboxRoot v-model:open="open">
    <LightboxTrigger>
      <div class="size-40 bg-gray-300">
        <Image
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAIAAADTED8xAAADMElEQVR4nOzVwQnAIBQFQYXff81RUkQCOyDj1YOPnbXWPmeTRef+/3O/OyBjzh3CD95BfqICMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMO0TAAD//2Anhf4QtqobAAAAAElFTkSuQmCC"
          class="max-h-[50px] object-contain"
          data-lightbox-trigger
          data-src=""
          data-width=""
          data-height=""
          data-extension=""
          data-mime=""
          data-thumbnail=""
        />
      </div>

      <Image
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANCSURBVEiJtZZPbBtFFMZ/M7ubXdtdb1xSFyeilBapySVU8h8OoFaooFSqiihIVIpQBKci6KEg9Q6H9kovIHoCIVQJJCKE1ENFjnAgcaSGC6rEnxBwA04Tx43t2FnvDAfjkNibxgHxnWb2e/u992bee7tCa00YFsffekFY+nUzFtjW0LrvjRXrCDIAaPLlW0nHL0SsZtVoaF98mLrx3pdhOqLtYPHChahZcYYO7KvPFxvRl5XPp1sN3adWiD1ZAqD6XYK1b/dvE5IWryTt2udLFedwc1+9kLp+vbbpoDh+6TklxBeAi9TL0taeWpdmZzQDry0AcO+jQ12RyohqqoYoo8RDwJrU+qXkjWtfi8Xxt58BdQuwQs9qC/afLwCw8tnQbqYAPsgxE1S6F3EAIXux2oQFKm0ihMsOF71dHYx+f3NND68ghCu1YIoePPQN1pGRABkJ6Bus96CutRZMydTl+TvuiRW1m3n0eDl0vRPcEysqdXn+jsQPsrHMquGeXEaY4Yk4wxWcY5V/9scqOMOVUFthatyTy8QyqwZ+kDURKoMWxNKr2EeqVKcTNOajqKoBgOE28U4tdQl5p5bwCw7BWquaZSzAPlwjlithJtp3pTImSqQRrb2Z8PHGigD4RZuNX6JYj6wj7O4TFLbCO/Mn/m8R+h6rYSUb3ekokRY6f/YukArN979jcW+V/S8g0eT/N3VN3kTqWbQ428m9/8k0P/1aIhF36PccEl6EhOcAUCrXKZXXWS3XKd2vc/TRBG9O5ELC17MmWubD2nKhUKZa26Ba2+D3P+4/MNCFwg59oWVeYhkzgN/JDR8deKBoD7Y+ljEjGZ0sosXVTvbc6RHirr2reNy1OXd6pJsQ+gqjk8VWFYmHrwBzW/n+uMPFiRwHB2I7ih8ciHFxIkd/3Omk5tCDV1t+2nNu5sxxpDFNx+huNhVT3/zMDz8usXC3ddaHBj1GHj/As08fwTS7Kt1HBTmyN29vdwAw+/wbwLVOJ3uAD1wi/dUH7Qei66PfyuRj4Ik9is+hglfbkbfR3cnZm7chlUWLdwmprtCohX4HUtlOcQjLYCu+fzGJH2QRKvP3UNz8bWk1qMxjGTOMThZ3kvgLI5AzFfo379UAAAAASUVORK5CYII="
        data-lightbox-trigger
        data-src=""
        data-width=""
        data-height=""
        data-extension=""
        data-mime=""
        data-thumbnail=""
      />
    </LightboxTrigger>

    <LightboxPortal to="#teleports">
      <LightboxOverlay class="fixed inset-0 bg-black/25 backdrop-blur-[2px]" />

      <LightboxContent aria-describedby="" class="fixed inset-0">
        <VisuallyHidden>
          <DialogTitle />
        </VisuallyHidden>

        <div class="absolute inset-0 m-4 flex flex-col justify-center">
          <div class="absolute top-0 left-0 w-full flex justify-between">
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

          <div class="absolute w-full flex items-center justify-between">
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
  LightboxTrigger,
} from '~/components/Shared/Lightbox'
import Image from '~/components/Shared/Image.vue'
import { ChevronIcon, CrossIcon } from '~/components/Shared/Icons'
import { BaseButton } from '~/components/Shared/Base'
import { DialogTitle, VisuallyHidden } from 'reka-ui'

const open = ref(false)
</script>
