import { createApp } from 'vue'
import App from './App.vue'
import FreeIM from '~/index'
const app = createApp(App)

app.use(FreeIM)
app.mount('#app')
