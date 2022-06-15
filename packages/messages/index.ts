import { withInstall } from '../utils'
import _Messages from './messages'

export const Messages = withInstall(_Messages)

export default Messages

export type { Test } from './types'

declare module 'vue' {
    export interface GlobalComponents {
        Messages: typeof Messages
    }
}