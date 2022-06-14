import { withInstall } from '../utils'
import _Contact from './contact'

export const Contact = withInstall(_Contact)

export default Contact
// export type { Test } from './types'

declare module 'vue' {
    export interface GlobalComponents {
        _Contact: typeof Contact
    }
}