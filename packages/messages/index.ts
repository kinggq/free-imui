import { withInstall } from '../utils'
import _Messages from './Messages'
import _MessageImage from './Image'
import _MessageFile from './File'
import _MessageText from './Text'
import _MessageEvent from './Event'
import _MessageTemplate from './Template'
import './index.less'

export const FreeMessages = withInstall(_Messages)
export const FreeMessageImage = withInstall(_MessageImage)
export const FreeMessageFile = withInstall(_MessageFile)
export const FreeMessageText = withInstall(_MessageText)
export const FreeMessageEvent = withInstall(_MessageEvent)
export const FreeMessageTemplate = withInstall(_MessageTemplate)

export default FreeMessages

export type { MessageInstance, Message, MessageStatus,
    MessageType } from './types'

declare module 'vue' {
    export interface GlobalComponents {
        Messages: typeof FreeMessages
    }
}
