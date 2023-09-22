<template>
  <button @click="triggerClickFunc"><slot /></button>
</template>

<script setup>
const emits = defineEmits(['onClick'])

const triggerClickFunc = () => {
  emits('onClick')
}
</script>
