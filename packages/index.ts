import { App } from 'vue'
import { FreeIM, FreeInstance } from './free'
import FreeAvatar from './avatar'
import FreeButton from './button'
import FreeContact from './contact'
import './styles'

const components = [ FreeIM, FreeAvatar, FreeContact, FreeButton ]

const install = (app:App) => {
    components.map(component => app.component(component.name, component))
}

export {
    FreeIM,
    FreeAvatar,
    FreeButton,
    FreeContact
}

export type {
    FreeInstance
}

export default {
    install
}