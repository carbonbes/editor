<template>
  <Primitive
    v-bind="forwarded"
    as-child
    class="py-1.5 px-2.5 w-full rounded-lg cursor-pointer hover:bg-gray-200/75 active:bg-gray-300/75 data-[state=open]:bg-blue-50 data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50"
  >
    <Primitive class="flex items-center justify-between">
      <div class="flex items-center gap-2 [&>.iconify]:!size-5">
        <slot />
      </div>

      <ChevronIcon v-if="subTrigger" right class="ml-6" />
    </Primitive>
  </Primitive>
</template>

<script lang="ts" setup>
import { Primitive, type PrimitiveProps, useForwardProps } from 'reka-ui'
import { ChevronIcon } from '~/components/Shared/Icons'

const { subTrigger, ...primitiveProps } = defineProps<
  PrimitiveProps & { subTrigger?: boolean }
>()

const forwarded = useForwardProps(primitiveProps)
</script>
