import type { MessageProps } from './Messages'
import { ComponentPublicInstance, Ref } from 'vue'
import { User } from '../free/types'

export type MessageStatus = 'success' | 'error' | 'uploading'

export type MessageType = 'text' | 'image' | 'file' | 'event'

export type Message = {
    id: string | number
    time: number
    type: MessageType
    status: MessageStatus
    content: string
    toContactId: string | number
    fileName?: string
    fileSize?: number
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
