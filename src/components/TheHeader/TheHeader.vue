<script setup>
// import { ref } from 'vue'

const navigationLinks = [
  { link: 'timeline', label: 'Timeline' },
  {
    link: 'overview',
    label: 'Overview'
  },
  {
    link: 'FAQs',
    label: 'FAQs'
  },
  {
    link: 'contact',
    label: 'Contact'
  }
]
// const showMobileNav = ref(false)
// const toggleMobileNav = (bool) => {
//   showMobileNav.value = bool
// }
</script>

<template>
  <header class="header">
    <figure>
      <img src="../../assets/icons/getlinked.svg" alt="GetLinked Logo" />
    </figure>

    <nav class="header__desktop">
      <ul>
        <li v-for="(link, index) in navigationLinks" :key="index">
          <RouterLink :to="`/${link.link}`">{{ link.label }}</RouterLink>
        </li>
      </ul>
      <app-button>Register</app-button>
    </nav>

    <!-- Mobile Navs -->
    <div class="header__mobile">
      <img src="../../assets/icons/hamburger.svg" />
      <!-- <img
        v-if="!showMobileNav"
        src="../../assets/icons/hamburger.svg"
        @click="toggleMobileNav(true)"
      /> -->
      <!-- <p @click="toggleMobileNav(false)" v-else>close</p>

      <nav v-if="showMobileNav">
        <ul>
          <li v-for="(link, index) in navigationLinks" :key="index">
            <RouterLink :to="`/${link.link}`">{{ link.label }}</RouterLink>
          </li>
        </ul>
        <app-button>Register</app-button> -->
      <!-- </nav> -->
    </div>
  </header>
</template>

<style lang="scss" scoped></style>
