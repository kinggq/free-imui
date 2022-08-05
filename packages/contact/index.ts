import { withInstall } from '../utils'
import _Contact from './Contact'
import './index.less'

export const FreeContact = withInstall(_Contact)

export default FreeContact
export type { Contact } from './types'

declare module 'vue' {
    export interface GlobalComponents {
        _Contact: typeof FreeContact
    }
}
