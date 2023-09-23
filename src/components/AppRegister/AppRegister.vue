<script setup>
import RequestError from '../../components/RequestError/RequestError.vue'
import AppModal from '../../components/AppModal/AppModal.vue'

import { reactive, ref, watch } from 'vue'
import useFetch from '../../composables/fetch'

const { isLoading, hasError, errorMessage, fetchRequest: registerUserRequest } = useFetch()

const isModalOpen = ref(false)

const formFields = reactive({
  teamName: '',
  email: '',
  phone: '',
  category: 'Select your category',
  groupSize: 'Select',
  topic: '',
  agreeToTerms: null
})

// const formFields = reactive({
//   teamName: 'Joel',
//   email: 'Joelojerinde1@gmail.com',
//   phone: '08143368703',
//   category: '1',
//   groupSize: '2',
//   topic: 'Hackathon',
//   agreeToTerms: true
// })

const getRequestResponse = (data) => {
  isModalOpen.value = true
  console.log(data)
}

const onSubmitHandler = () => {
  if (
    !formFields.teamName ||
    !formFields.agreeToTerms ||
    !formFields.category ||
    !formFields.email ||
    !formFields.groupSize ||
    !formFields.phone ||
    !formFields.topic ||
    formFields.category === 'Select your category' ||
    formFields.groupSize === 'Select'
  )
    return

  // Sending the creation request
  registerUserRequest(
    {
      url: `${import.meta.env.VITE_BASE_URL}/hackathon/registration`,
      method: 'POST',
      body: {
        email: formFields.email,
        phone_number: formFields.phone,
        team_name: formFields.teamName,
        group_size: +formFields.groupSize,
        project_topic: formFields.topic,
        category: +formFields.category,
        privacy_poclicy_accepted: formFields.agreeToTerms
      },
      errorMessage: 'Looks like the signup fairy is on vacation, try again later! 🧚‍♂️✨'
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
</script>

<template>
  <app-modal v-if="isModalOpen" @close-modal="closeModal"
    ><div class="modal__content">
      <img src="../../assets/images/congratulation.png" alt="Congratulations" />
      <h4>Congratulations<br />you have successfully Registered!</h4>
      <p>Yes, it was easy and you did it!<br />check your mail box for next step 😜</p>
      <app-button class="home__button" @onClick="closeModal">Back</app-button>
    </div></app-modal
  >
  <div class="register">
    <div class="register--bg"></div>
    <h3>Register</h3>
    <div class="register__left">
      <div class="register__left--bg"></div>
      <!-- Stars Start -->
      <figure class="register__pink--star">
        <img src="../../assets/icons/pink-star.svg" alt="Pink Star" />
      </figure>
      <figure class="register__purple--star">
        <img src="../../assets/icons/purple-star.svg" alt="Purple Star" />
      </figure>
      <figure class="register__dark1--star">
        <img src="../../assets/icons/dark-star.svg" alt="Dark Star" />
      </figure>
      <!-- Stars End -->

      <img src="../../assets/images/register.png" alt="Register officer img" />
    </div>
    <div class="register__right">
      <div class="register__right--bg"></div>
      <!-- Stars Start -->
      <figure class="register__dark2--star">
        <img src="../../assets/icons/dark-star.svg" alt="Dark Star" />
      </figure>
      <figure class="register__white--star">
        <img src="../../assets/icons/star.svg" alt="White Star" />
      </figure>
      <!-- Stars End -->

      <div class="register__form">
        <h3>Register</h3>
        <p class="sub-legend">Be part of this movement</p>
        <h4>CREATE YOUR ACCOUNT</h4>
        <div class="register__info">
          <div class="register__fields">
            <div class="register__group">
              <label for="teamName">Team's Name</label>
              <input
                id="teamName"
                type="text"
                name="teamName"
                placeholder="Enter the name of your group"
                v-model="formFields.teamName"
              />
            </div>
            <div class="register__group">
              <label for="phone">Phone</label>

              <input
                id="phone"
                type="text"
                name="phone"
                placeholder="Enter your phone number"
                v-model="formFields.phone"
              />
            </div>
          </div>
          <div class="register__fields">
            <div class="register__group">
              <label for="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                v-model="formFields.email"
              />
            </div>
            <div class="register__group">
              <label for="projectTopic">Project Topic</label>
              <input
                id="projectTopic"
                type="text"
                name="projectTopic"
                placeholder="What is your group project topic"
                v-model="formFields.topic"
              />
            </div>
          </div>
          <div class="register__fields">
            <div class="register__group">
              <label for="category">Category</label>
              <select name="category" id="category" v-model="formFields.category">
                <option value="Select your category" hidden>Select your category</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div class="register__group">
              <label for="groupSize">Group Size</label>
              <select name="groupSize" id="groupSize" v-model="formFields.groupSize">
                <option value="Select" hidden>Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </div>
        </div>
        <p class="note">Please review your registration details before submitting</p>
        <div class="register__cta">
          <div>
            <input type="checkbox" name="tac" id="tac" v-model="formFields.agreeToTerms" />
            <span>I agreed with the event terms and conditions and privacy policy</span>
          </div>
          <request-error v-if="hasError">{{ errorMessage }}</request-error>
          <app-button class="home__button" @onClick="onSubmitHandler"
            >{{ isLoading ? 'Loading...' : 'Register Now' }}
          </app-button>
        </div>
      </div>
    </div>
  </div>
</template>
