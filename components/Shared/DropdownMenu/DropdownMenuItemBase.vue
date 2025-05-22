<template>
  <Primitive
    v-bind="forwarded"
    class="py-1.5 px-2.5 w-full h-10 flex items-center gap-2 [&>.iconify]:!size-5 rounded-lg cursor-pointer hover:bg-gray-100 active:bg-gray-300/75 data-[state=open]:bg-blue-50 data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50"
  >
    <slot />
  </Primitive>
</template>

<script lang="ts" setup>
import { Primitive, type PrimitiveProps, useForwardProps } from 'reka-ui'

const props = defineProps<PrimitiveProps>()

const forwarded = useForwardProps(props)
</script>
