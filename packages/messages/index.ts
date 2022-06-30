import { withInstall } from '../utils'
import _Messages from './Messages'

export const FreeMessages = withInstall(_Messages)

export default FreeMessages

export type { MessageInstance, Message } from './types'

declare module 'vue' {
    export interface GlobalComponents {
        Messages: typeof FreeMessages
    }
}