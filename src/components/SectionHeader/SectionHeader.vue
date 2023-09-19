<script setup lang="ts">
defineProps({
  heading: {
    type: String,
    required: true
  },
  span: {
    type: String,
    required: true
  }
})
</script>

<template>
  <h2>
    {{ heading }} <br />
    <span>{{ span }}</span>
  </h2>
</template>

<style lang="scss" scoped>
h2 {
  font-size: 3.2rem;
  color: #fff;
  font-family: Clash Display;
  font-weight: 700;
  & span {
    color: #d434fe;
  }
}
</style>
