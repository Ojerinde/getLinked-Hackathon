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
  <section class="footer">
    <div class="footer__box">
      <div class="footer__left">
        <img src="../../assets//icons/getlinked.svg" alt="GetLinked Logo" />
        <p>
          Getlinked Tech Hackathon is a technology innovation program established by a group of
          organizations with the aim of showcasing young and talented individuals in the field of
          technology
        </p>
        <div>Terms of Use&nbsp;&nbsp; <span></span> &nbsp; &nbsp;Privacy Policy</div>
        <!-- Star start -->
        <figure class="footer__left--star">
          <img src="../../assets//icons/star.svg" />
        </figure>
        <!-- Star end -->
      </div>
      <div class="footer__center">
        <!-- Stars start -->
        <figure class="footer__center--star1">
          <img src="../../assets//icons/dark-star.svg" />
        </figure>
        <figure class="footer__center--star2">
          <img src="../../assets//icons/pink-star.svg" />
        </figure>
        <!-- Stars end -->

        <h2>Useful Links</h2>
        <ul class="footer__center--navigations">
          <li v-for="(link, index) in navigationLinks" :key="index">
            <RouterLink :to="`/${link.link}`">{{ link.label }}</RouterLink>
          </li>
        </ul>
        <div class="footer__center--socials">
          <h3>Follow us</h3>
          <ul>
            <li>
              <RouterLink target="_blank" to="https://www.instagram.com/">
                <img src="../../assets/icons/instagram.svg" alt="" />
              </RouterLink>
            </li>
            <li>
              <RouterLink target="_blank" to="https://twitter.com/">
                <img src="../../assets/icons/x.svg" alt="" />
              </RouterLink>
            </li>
            <li>
              <RouterLink target="_blank" to="https://web.facebook.com/">
                <img src="../../assets/icons/facebook.svg" alt="" />
              </RouterLink>
            </li>
            <li>
              <RouterLink target="_blank" to="https://www.linkedin.com/">
                <img src="../../assets/icons/linkedIn.svg" alt="" />
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer__right">
        <!-- Stars start -->
        <figure class="footer__right--star">
          <img src="../../assets//icons/star.svg" />
        </figure>

        <!-- Stars end -->
        <h2>Contact Us</h2>
        <ul>
          <li>
            <img src="../../assets/icons/call.svg" alt="" />
            <p>+234 6707653444</p>
          </li>
          <li>
            <img src="../../assets/icons/location.svg" alt="" />
            <p>
              27, Alara Street<br />
              Yaba 100012<br />
              Lagos State
            </p>
          </li>
        </ul>
      </div>
    </div>
    <h4>All rights reserved. © getlinked Ltd.</h4>
  </section>
</template>
