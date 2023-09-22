<script setup>
import HomeHeader from '../../components/HomeHeader/HomeHeader.vue'
import ImageAlignedToLeft from '../../components/ImageAlignedToLeft/ImageAlignedToLeft.vue'
import ImageAlignedToRight from '../../components/ImageAlignedToRight/ImageAlignedToRight.vue'
import TheAttributes from '../../components/TheAttributes/TheAttributes.vue'
import TheFAQ from '../../components/TheFAQs/TheFAQs.vue'
// import TheTimeline from '../../components/TheTimeline/TheTimeline.vue'
import ThePrizes from '../../components/ThePrizes/ThePrizes.vue'
import AppPartners from '../../components/AppPartners/AppPartners.vue'
import AppTerms from '../../components/AppTerms/AppTerms.vue'
import AppFooter from '../../components/AppFooter/AppFooter.vue'
</script>

<template>
  <section>
    <home-header></home-header>
    <image-aligned-to-left></image-aligned-to-left>
    <image-aligned-to-right></image-aligned-to-right>
    <the-attributes></the-attributes>
    <TheFAQ></TheFAQ>
    <!-- <the-timeline></the-timeline> -->
    <the-prizes></the-prizes>
    <app-partners></app-partners>
    <app-terms></app-terms>
    <app-footer></app-footer>
  </section>
</template>

<style lang="scss" scoped></style>
