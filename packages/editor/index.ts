import { withInstall } from '../utils'
import _Editor from './Editor'
import './index.less'
export const FreeEditor = withInstall(_Editor)

export default FreeEditor

export type { Test } from './types'

declare module 'vue' {
    export interface GlobalComponents {
        FreeEditor: typeof FreeEditor
    }
}