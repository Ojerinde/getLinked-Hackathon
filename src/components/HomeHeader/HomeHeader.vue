<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateToRegister = () => {
  router.push('/register')
}
</script>

<template>
  <section class="home">
    <!-- Left -->
    <div class="home__left">
      <div class="home__left--bg"></div>
      <figure class="home__white--star">
        <img src="../../assets/icons/star.svg" alt="Start" />
      </figure>
      <div class="home__header--1">
        <h1>
          getlinked Te
          <div>
            <span>c</span>
            <figure><img src="../../assets/icons/bulb.svg" alt="Start" /></figure>
          </div>
          h
        </h1>
        <figure class="home__dark--star1">
          <img src="../../assets/icons/dark-star.svg" alt="Star" />
        </figure>
      </div>
      <div class="home__header--2">
        <h2>Hackathon<span>1.0</span></h2>
        <figure>
          <img src="../../assets/icons/chain.svg" alt="Chain" />
        </figure>
        <figure>
          <img src="../../assets/icons/fire.svg" alt="Fire" />
        </figure>
      </div>
      <p class="home__paragraph">
        Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize
      </p>

      <app-button class="home__button" @onClick="navigateToRegister">Register</app-button>

      <div class="home__timer--box">
        <figure class="home__dark--star2">
          <img src="../../assets/icons/dark-star.svg" alt="Star" />
        </figure>
        <div class="home__timer">00<span>H</span> 00<span>M</span> 00<span>S</span></div>
      </div>
    </div>
    <!-- Right -->
    <div class="home__right">
      <div class="home__right--bg"></div>
      <h3>
        Igniting a Revolution in&nbsp;
        <div><span>HR Innovation</span><img src="../../assets/icons/innovation.svg" alt="" /></div>
      </h3>
      <figure>
        <img src="../../assets/images/homeheader.png" alt="Metaverse" />
      </figure>
    </div>
  </section>
</template>
