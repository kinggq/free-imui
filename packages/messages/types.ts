import type { MessageProps } from './messages'
import { ComponentPublicInstance, Ref } from 'vue'

type MessageExpose = {
    loading: Ref
}

export type MessageInstance = ComponentPublicInstance<
    MessageProps,
    MessageExpose
>