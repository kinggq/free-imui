import { App } from 'vue'
import FreeIM from './free'

FreeIM.install = (app: App) => {
    app.component(FreeIM.name, FreeIM)
}

export default FreeIM