import { ComponentPublicInstance } from "vue"
import { ContactType } from '../contact/types'
import type { FProps } from './free'

type FreeIMExpose = {
    initContacts: (contacts: ContactType[]) => void
}

export type FreeInstance = ComponentPublicInstance<
    FProps,
    FreeIMExpose
>