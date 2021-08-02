import { createApp } from 'vue'
import App from './App.vue'
import store from './store.js'
import router from './router'
import i18n from './i18n'
import VueSelect from 'vue-select'

const { worker } = require('./mocks/browser')
worker.start()

createApp(App, VueSelect).use(i18n).use(router).use(store).mount('#app')