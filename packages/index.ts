import { App } from 'vue'
import FreeIM from './free'
import FreeAvatar from './avatar'
import FreeButton from './button'
import './styles'

const components = [ FreeIM, FreeAvatar, FreeButton ]

const install = (app:App) => {
    components.map(component => app.component(component.name, component))
}

export {
    FreeIM,
    FreeAvatar,
    FreeButton
}

export default {
    install
}