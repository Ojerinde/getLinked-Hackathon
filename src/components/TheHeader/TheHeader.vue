<script setup>
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const buttonClass = computed(() => {
  return route.path !== '/register' ? 'header__button' : 'header__button--active'
})

const navigateToRegister = () => {
  router.push('/register')
}

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

const showMobileNav = ref(false)
const toggleMobileNav = (bool) => {
  showMobileNav.value = bool
}
</script>
<template>
  <header class="header">
    <nav class="header__desktop">
      <figure @click="$router.push('/')">
        <img src="../../assets/icons/getlinked.svg" alt="GetLinked Logo" />
      </figure>
      <ul>
        <RouterLink v-for="(link, index) in navigationLinks" :key="index" :to="`/${link.link}`">{{
          link.label
        }}</RouterLink>
      </ul>
      <app-button :class="buttonClass" @click="navigateToRegister">Register</app-button>
    </nav>

    <!-- Mobile Navs -->
    <div class="header__mobile">
      <figure @click="$router.push('/')">
        <img src="../../assets/icons/getlinked.svg" alt="GetLinked Logo" />
      </figure>
      <figure @click="toggleMobileNav(true)">
        <img src="../../assets/icons/hamburger.svg" />
      </figure>
      <div v-if="showMobileNav" class="header__mobile--overlay">
        <nav>
          <figure @click="toggleMobileNav(false)">
            <img src="../../assets/icons/close.svg" />
          </figure>
          <ul>
            <li v-for="(link, index) in navigationLinks" :key="index">
              <RouterLink :to="`/${link.link}`">{{ link.label }}</RouterLink>
            </li>
          </ul>
          <app-button :class="buttonClass" @click="navigateToRegister">Register</app-button>
        </nav>
      </div>
    </div>
  </header>
</template>
