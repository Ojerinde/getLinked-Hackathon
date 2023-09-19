<script setup>
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
</script>

<template>
  <header class="header">
    <img src="../../assets//icons/getlinked.svg" alt="GetLinked Logo" />

    <nav>
      <ul>
        <li v-for="(link, index) in navigationLinks" :key="index">
          <RouterLink :to="`/${link.link}`">{{ link.label }}</RouterLink>
        </li>
      </ul>
      <app-button>Register</app-button>
    </nav>
  </header>
</template>

<style lang="scss" scoped></style>
