import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'

// Import translations
import it from './i18n/it.json'
import en from './i18n/en.json'

// Import global styles
import './style.css'

// Import Bootstrap and Font Awesome
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '@fortawesome/fontawesome-free/js/all.min.js'

// Create i18n instance
const i18n = createI18n({
  legacy: false,
  locale: 'it', // default locale
  fallbackLocale: 'en',
  messages: {
    it,
    en
  }
})

// Create Vue app
const app = createApp(App)

// Use plugins
app.use(router)
app.use(i18n)

// Mount app
app.mount('#app')
