<script setup>
defineProps({
  heading: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  step: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  }
})
</script>
<template>
  <div class="lTimeline">
    <div class="lTimeline__box--1">
      <p class="lTimeline__date">{{ date }}</p>
      <img v-if="step === 6" src="../../assets/icons/dark-star.svg" alt="" />
    </div>
    <div class="lTimeline__box--2">
      <p :class="{ 'lTimeline__border--lg': step === 1, 'lTimeline__border--sm': step !== 1 }"></p>
      <p class="lTimeline__step">{{ step }}</p>
    </div>

    <div class="lTimeline__box--3">
      <h2 class="lTimeline__heading">{{ heading }}</h2>
      <p class="lTimeline__description">{{ description }}</p>
    </div>
  </div>
</template>
