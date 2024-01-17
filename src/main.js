import { createApp } from 'vue'
import routes from './routes/index.js'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()

app.use(routes)
app.use(pinia)
app.mount('#app')
