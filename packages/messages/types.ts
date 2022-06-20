import type { MessageProps } from './messages'
import { ComponentPublicInstance } from 'vue'

type MessageExpose = {
    loading: boolean
}

export type MessageInstance = ComponentPublicInstance<
    MessageProps,
    MessageExpose
>