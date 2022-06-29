import { App } from 'vue'
import { FreeIM, FreeInstance, User } from './free'
import FreeAvatar from './avatar'
import FreeButton from './button'
import { FreeContact, Contact } from './contact'
import { FreeMessages, MessageInstance, Message } from './messages'
import { FreeEditor } from './editor'
import './styles'

const components = [ FreeIM, FreeAvatar, FreeContact, FreeButton, FreeMessages, FreeEditor ]

const install = (app:App) => {
    components.map(component => app.component(component.name, component))
}

export {
    FreeIM,
    FreeAvatar,
    FreeButton,
    FreeContact,
    FreeMessages,
    FreeEditor
}

export type {
    FreeInstance,
    MessageInstance,
    Contact,
    Message,
    User
}

export default {
    install
}