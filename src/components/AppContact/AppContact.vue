<script setup>
import RequestError from '../../components/RequestError/RequestError.vue'

import { ref } from 'vue'
import useFetch from '../../composables/fetch'

const { isLoading, hasError, errorMessage, fetchRequest: contactUsRequest } = useFetch()

const firstName = ref('Joel')
const email = ref('Joelojerinde@gmail.com')
const message = ref('Test')

const getRequestResponse = (data) => {
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
</script>

<template>
  <div class="contact">
    <div class="contact__left">
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
      <div class="contact__form">
        <h3>Questions or need assistance?</h3>
        <h3>Let us know about it!</h3>
        <div class="contact__input">
          <input type="text" name="firstName" placeholder="First Name" v-model="firstName" />
          <input type="email" name="email" placeholder="Mail" v-model="email" />
          <textarea name="message" placeholder="Message" v-model="message"></textarea>
        </div>
        <div class="contact__cta">
          <request-error v-if="!hasError">{{ errorMessage }}</request-error>

          <app-button class="home__button" @onClick="onSubmitHandler">{{
            isLoading ? 'Loading...' : 'Submit'
          }}</app-button>
        </div>
      </div>
    </div>
  </div>
</template>
