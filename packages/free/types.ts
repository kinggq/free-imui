import { ComponentPublicInstance, ComputedRef } from "vue"
import { Contact, ContactUpdate } from '../contact/types'
import type { FProps } from './Free'
import type { Message, MessageStatus, MessageType } from '../index'

type FreeIMExpose = {
    initContacts: (contacts: Contact[]) => void
    appendMessage: (message: Message) => void
    updateMessage: (message: UpdateMessage) => void
    updateContact: (contact: ContactUpdate) => void
    getCurrentMessages: ComputedRef<ComputedRef<Message[]>>
    scrollToBottom: () => void
}

export type UpdateMessage = {
    id: string | number
    time?: number
    type?: MessageType
    status?: MessageStatus
    content?: string
    toContactId: string | number
    fileName?: string
    fileSize?: number
    from?: User
}

export type User = {
    nickname: string
    id: string | number
    avatar: string
}

export type FreeInstance = ComponentPublicInstance<
    FProps,
    FreeIMExpose
>
