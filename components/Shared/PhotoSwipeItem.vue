<template>
  <a :href target="_blank" v-bind="pswpAttrs">
    <slot />
  </a>
</template>

<script lang="ts" setup>
const { href } = defineProps<{ href: string }>()

const dimensions = ref<DimensionsFromBase64MediaReturn | null>(null)

const pswpAttrs = computed(() => ({
  'data-cropped': true,
  'data-pswp-width': dimensions.value?.width,
  'data-pswp-height': dimensions.value?.height
}))

async function getDimensions() {
  dimensions.value = await getDimensionsFromBase64Media(href)
}

onMounted(getDimensions)
</script>