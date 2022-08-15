import { createApp } from 'vue'
import App from './App.vue'
 // @ts-ignore
import FreeIM from '~/index'
const app = createApp(App)

app.use(FreeIM)
app.mount('#app')
