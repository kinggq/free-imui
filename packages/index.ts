import { App } from 'vue'
import { FreeIM, FreeInstance, User } from './free'
import FreeAvatar from './avatar'
import FreeButton from './button'
import { FreeContact, Contact } from './contact'
import { FreeBadge } from './badge'
import { FreeDialog } from './dialog'

import {
    FreeMessages,
    MessageInstance,
    Message,
    MessageStatus,
    MessageType
} from './messages'

import { FreeEditor } from './editor'
import './styles'

const components = [FreeIM, FreeAvatar, FreeContact, FreeButton, FreeMessages, FreeEditor, FreeBadge, FreeDialog]

const install = (app: App) => {
    components.map(component => app.component(component.name, component))
}

export {
    FreeIM,
    FreeAvatar,
    FreeButton,
    FreeContact,
    FreeMessages,
    FreeEditor,
    FreeDialog
}

export type {
    FreeInstance,
    MessageInstance,
    Contact,
    Message,
    User,
    MessageStatus,
    MessageType
}

export default {
    install
}