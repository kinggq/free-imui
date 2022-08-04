import { withInstall } from '../utils'
import _FreeIM from './Free'

// FreeIM.install = (app: App) => {
//     app.component(FreeIM.name, FreeIM)
// }
export const FreeIM = withInstall(_FreeIM)

export default FreeIM

export type { FreeInstance, User } from './types'

declare module 'vue' {
    export interface GlobalComponents {
        FreeIM: typeof FreeIM
    }
}
