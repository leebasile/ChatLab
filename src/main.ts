import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import './styles/index.css'

/**
 * ChatLab - AI Chat Client
 * Entry point for the Vue 3 application
 */
const app = createApp(App)

// State management
app.use(createPinia())

// Client-side routing
app.use(router)

app.mount('#app')
