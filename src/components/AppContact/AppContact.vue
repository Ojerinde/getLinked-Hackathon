<script setup>
import RequestError from '../../components/RequestError/RequestError.vue'
import AppModal from '../../components/AppModal/AppModal.vue'

import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import useFetch from '../../composables/fetch'

const router = useRouter()

const { isLoading, hasError, errorMessage, fetchRequest: contactUsRequest } = useFetch()
const isModalOpen = ref(false)

// const firstName = ref('Joel')
// const email = ref('Joelojerinde@gmail.com')
// const message = ref('Test Message')

const firstName = ref('')
const email = ref('')
const message = ref('')

const getRequestResponse = (data) => {
  isModalOpen.value = true
  console.log(data)
}

const onSubmitHandler = () => {
  if (!firstName.value || !email.value || !message.value) return
  contactUsRequest(
    {
      url: `${import.meta.env.VITE_BASE_URL}/hackathon/contact-form`,
      method: 'POST',
      body: {
        email: email.value,
        phone_number: '08143368703',
        first_name: firstName.value,
        message: message.value
      },
      errorMessage: 'Oops! It seems your message got lost in the virtual Bermuda Triangle'
    },
    getRequestResponse
  )
}

const closeModal = () => {
  isModalOpen.value = false
}

watch(isModalOpen, (newValue) => {
  if (newValue) {
    // Allow closing the modal when the Esc key is pressed
    const closeOnEsc = (event) => {
      if (event.key === 'Escape') {
        closeModal()
        window.removeEventListener('keydown', closeOnEsc)
      }
    }
    window.addEventListener('keydown', closeOnEsc)
  }
})
const navigateBack = () => {
  router.push('/')
}
</script>

<template>
  <app-modal v-if="isModalOpen" @close-modal="closeModal">
    <div class="modal__content">
      <img src="../../assets/images/congratulation.png" alt="Congratulations" />
      <h4>
        Hooray,<br />
        your message has been sent! 🚀
      </h4>
      <p>
        Expect a reply soon, and keep an eye on your inbox<br />for our digital carrier pigeon!"
        🐦📬😄
      </p>
      <app-button class="home__button" @onClick="closeModal">Back</app-button>
    </div>
  </app-modal>

  <div class="contact">
    <!-- Stars  START-->
    <figure class="contact__pink--star">
      <img src="../../assets/icons/pink-star.svg" alt="Pink Star" />
    </figure>
    <figure class="contact__dark--star">
      <img src="../../assets/icons/dark-star.svg" alt="Dark Star" />
    </figure>
    <!-- Stars  END-->

    <button type="button" class="contact__back" @click="navigateBack">
      <img src="../../assets/icons/arrow-left.svg" alt="back arrow" />
    </button>
    <div class="contact__left">
      <div class="contact__left--bg"></div>
      <h3>Get in touch</h3>
      <p>Contact<br />Information</p>
      <p>27,Alara Street<br />Yaba 100012<br />Lagos State</p>
      <p>Call Us : 07067981819</p>
      <p>We are open from Monday-Friday<br />08:00am - 05:00pm</p>
      <div class="contact__social">
        <p>Share on</p>
        <div class="contact__icons">
          <span><img src="../../assets/icons/instagram.svg" alt="Instagram logo" /></span>
          <span><img src="../../assets/icons/x.svg" alt="X-logo" /></span>
          <span><img src="../../assets/icons/facebook.svg" alt="Facebook logo" /></span>
          <span><img src="../../assets/icons/linkedIn.svg" alt="LinkedIn logo" /></span>
        </div>
      </div>
    </div>
    <div class="contact__right">
      <figure class="contact__purple--star">
        <img src="../../assets/icons/purple-star.svg" alt="Purple Star" />
      </figure>
      <figure class="contact__white--star">
        <img src="../../assets/icons/star.svg" alt="White Star" />
      </figure>
      <div class="contact__right--bg"></div>
      <div class="contact__form">
        <h3>Questions or need assistance?</h3>
        <h3>Let us know about it!</h3>
        <p>Email us below to any question related to our event</p>
        <div class="contact__input">
          <input type="text" name="firstName" placeholder="First Name" v-model="firstName" />
          <input type="email" name="email" placeholder="Mail" v-model="email" />
          <textarea name="message" placeholder="Message" v-model="message"></textarea>
        </div>
        <div class="contact__cta">
          <request-error v-if="hasError">{{ errorMessage }}</request-error>
          <app-button class="home__button" @onClick="onSubmitHandler">{{
            isLoading ? 'Loading...' : 'Submit'
          }}</app-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
