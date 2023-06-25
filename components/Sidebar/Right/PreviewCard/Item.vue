<template>
  <div
    class="p-3 hover:bg-gray-100 cursor-pointer dark:hover:bg-dim-300 border-b"
    :class="WrapperClasses"
  >
    <slot></slot>
  </div>
</template>
<script setup>
const WrapperClasses = computed(()=> `${twitterBorderColor} ${defaultTransition}`)
const { twitterBorderColor, defaultTransition } = useTailwindConfig();
</script>
