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
  font-family: 'Clash Display', sans-serif;
  font-weight: 700;
  @media only screen and (max-width: 1024px) {
    width: 100%;
    font-size: 2rem;
    line-height: 2.66rem;
    text-align: center;
  }
  & span {
    color: #d434fe;
  }
}
</style>
