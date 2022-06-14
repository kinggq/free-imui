import { withInstall } from '../utils'
import _Test from './test'

export const FreeIM = withInstall(_Test)

export default FreeIM

export type { Test } from './types'

declare module 'vue' {
    export interface GlobalComponents {
        _Test: typeof FreeIM
    }
}