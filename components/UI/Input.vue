<template>
  <div>
    <label
      for=""
      v-if="props.label"
      class="block pl-3 ml-px text-small font-medium text-gray-70"
    >
      {{ props.label }}</label
    >
    <input
      :type="props.type"
      @input="event => emits('update:modelValue', event.target.value)"
      :value="props.modelValue"
      :placeholder="props.placeholder"
      class="block px-4 w-full border-gray-300 rounded-full shadow-small focus:ring-blue-500 focus:border-blue-500 sm:text-small"
    />
  </div>
</template>
<script setup>
const emits = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
   placeholder: {
    type: String,
     default: '',
  },
   type: {
    type: String,
     default: 'text',
  },
  label: {
    type: String,
    default: null,
  },
});
</script>
