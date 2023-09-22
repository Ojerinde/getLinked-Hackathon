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
  <div class="mTimeline">
    <div class="mTimeline__box--2">
      <p class="mTimeline__border"></p>
      <p class="mTimeline__step">{{ step }}</p>
    </div>
    <div>
      <div class="mTimeline__box--3">
        <h2 class="mTimeline__heading">{{ heading }}</h2>
        <p class="mTimeline__description">{{ description }}</p>
      </div>
      <div class="mTimeline__box--1">
        <p class="mTimeline__date">{{ date }}</p>
        <img v-if="step === 6" src="../../assets/icons/dark-star.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped="true"></style>
