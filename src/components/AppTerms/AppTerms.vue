<script setup>
const terms = [
  'The Standard License grants you a non-exclusive right to navigate and register for our event',
  'You are licensed to use the item available at any free source sites, for your project developement'
]
</script>

<template>
  <section class="privacy">
    <div class="privacy__left">
      <section-header heading="Privacy Policy and" span="Terms"></section-header>

      <!-- Stars Start -->
      <figure class="privacy__left--star">
        <img src="../../assets/icons/dark-star.svg" alt="" />
      </figure>
      <figure class="privacy__left--star2">
        <img src="../../assets/icons/purple-star.svg" alt="" />
      </figure>
      <!-- Stars End -->

      <p class="privacy__last--seen">Last updated on September 12, 2023</p>
      <p class="privacy__paragraph--1">
        Below are our privacy & policy, which outline a lot of goodies. it’s our aim to always take
        of our participant
      </p>
      <div class="privacy__box">
        <figure class="privacy__box--star3">
          <img src="../../assets/icons/purple-star.svg" alt="" />
        </figure>

        <p class="privacy__paragraph--2">
          At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting
          your personal information. This Privacy Policy outlines how we collect, use, disclose, and
          safeguard your data when you participate in our tech hackathon event. By participating in
          our event, you consent to the practices described in this policy.
        </p>

        <h3 class="privacy__heading">Licensing Policy</h3>
        <p class="privacy__paragraph--3">Here are terms of our Standard License:</p>

        <ul class="privacy__list">
          <li v-for="(term, index) in terms" :key="index">
            <img src="../../assets/icons/checkmark.svg" alt="" />
            <span class="privacy__list--span">{{ term }}</span>
          </li>
        </ul>
        <div class="privacy__button">
          <app-button>Read More</app-button>
        </div>
      </div>
      <div class="privacy--bg"></div>
    </div>

    <figure class="privacy__right">
      <img src="../../assets/images/privacy.png" alt="" />
    </figure>
    <p class="privacy--bg2"></p>
  </section>
</template>
