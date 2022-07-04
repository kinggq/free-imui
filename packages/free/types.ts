import { ComponentPublicInstance } from "vue"
import { Contact } from '../contact/types'
import type { FProps } from './free'
import type { Message } from '../index'

type FreeIMExpose = {
    initContacts: (contacts: Contact[]) => void,
    appendMessage: (message: Message) => void
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