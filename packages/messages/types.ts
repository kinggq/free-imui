import type { MessageProps } from './messages'
import { ComponentPublicInstance, Ref } from 'vue'
import { User } from '../free/types'

export type Message = {
    id: string | number,
    time: number,
    type: 'text' | 'image' | 'file',
    status: 'success' | 'error' | 'uploading',
    content: string,
    toContactId: string | number,
    from: User
}

type MessageExpose = {
    loading: Ref
    resetLoading: () => void
    scrollToBottom: () => void
    loadend: () => void
}

export type MessageInstance = ComponentPublicInstance<
    MessageProps,
    MessageExpose
>