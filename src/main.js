import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "bootstrap/dist/css/bootstrap.css"

// npm i bootstrap-icons
import "bootstrap-icons/font/bootstrap-icons.css"

createApp(App).use(router).mount('#app')

import "bootstrap/dist/js/bootstrap.js"
