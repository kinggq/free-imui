import { createApp } from 'vue'
import App from './App.vue'
 // @ts-ignore
import FreeIM from '../lib/index.umd.min.js'
const app = createApp(App)

app.use(FreeIM)
app.mount('#app')
