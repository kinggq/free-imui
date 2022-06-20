import { App } from 'vue'
import { FreeIM, FreeInstance } from './free'
import FreeAvatar from './avatar'
import FreeButton from './button'
import { FreeContact, Contact } from './contact'
import { FreeMessages, MessageInstance } from './messages'
import './styles'

const components = [ FreeIM, FreeAvatar, FreeContact, FreeButton, FreeMessages ]

const install = (app:App) => {
    components.map(component => app.component(component.name, component))
}

export {
    FreeIM,
    FreeAvatar,
    FreeButton,
    FreeContact,
    FreeMessages
}

export type {
    FreeInstance,
    MessageInstance,
    Contact
}

export default {
    install
}