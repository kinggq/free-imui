import type { MessageProps } from './messages'
import { ComponentPublicInstance, Ref } from 'vue'

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