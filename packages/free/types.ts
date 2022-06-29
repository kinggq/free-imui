import { ComponentPublicInstance } from "vue"
import { Contact } from '../contact/types'
import type { FProps } from './free'

type FreeIMExpose = {
    initContacts: (contacts: Contact[]) => void
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