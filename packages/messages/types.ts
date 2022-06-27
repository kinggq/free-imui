import type { MessageProps } from './messages'
import { ComponentPublicInstance, Ref } from 'vue'

type MessageExpose = {
    loading: Ref,
    resetLoading: () => void
}

export type MessageInstance = ComponentPublicInstance<
    MessageProps,
    MessageExpose
>