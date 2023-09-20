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
  <div class="rTimeline">
    <img v-if="step === 1" src="../../assets/icons/purple-star.svg" alt="" />
    <div class="rTimeline__box--1">
      <h2 class="rTimeline__heading">{{ heading }}</h2>
      <p class="rTimeline__description">{{ description }}</p>
    </div>
    <div class="rTimeline__box--2">
      <p :class="{ 'rTimeline__border--lg': step === 1, 'rTimeline__border--sm': step !== 1 }"></p>
      <p class="rTimeline__step">{{ step }}</p>
    </div>
    <div class="rTimeline__box--3">
      <img v-if="step === 3" src="../../assets/icons/star.svg" alt="" />
      <p class="rTimeline__date">{{ date }}</p>
    </div>
  </div>
</template>
