import './main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import AppButton from './components/AppButton/AppButton.vue'
import SectionHeader from './components/SectionHeader/SectionHeader.vue'

const app = createApp(App)

// Global registration of components
app.component('app-button', AppButton)
app.component('section-header', SectionHeader)

app.use(router)

app.mount('#app')
