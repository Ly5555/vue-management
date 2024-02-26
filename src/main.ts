/*
 * @Author: Lyq 
 * @Date: 2024-02-24 15:52:39
 * @LastEditors: Lyq 
 * @LastEditTime: 2024-02-26 20:23:11
 */
// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
