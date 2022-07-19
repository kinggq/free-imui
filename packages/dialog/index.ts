import { withInstall } from '../utils'
import _Dialog from './Dialog'
import './index.less'
export const FreeDialog = withInstall(_Dialog)

export default FreeDialog

export type { Test } from './types'

declare module 'vue' {
    export interface GlobalComponents {
        Dialog: typeof FreeDialog
    }
}