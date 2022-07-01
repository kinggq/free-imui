import { withInstall } from '../utils'
import _Badge from './Badge'
import './index.less'

export const FreeBadge = withInstall(_Badge)

export default FreeBadge

export type { Test } from './types'

declare module 'vue' {
    export interface GlobalComponents {
        _Badge: typeof FreeBadge
    }
}