import { withInstall } from '../utils'
import _FreeIM from './free'

// FreeIM.install = (app: App) => {
//     app.component(FreeIM.name, FreeIM)
// }
export const FreeIM = withInstall(_FreeIM)

export default FreeIM

export type { FreeInstance } from './types'

declare module 'vue' {
    export interface GlobalComponents {
        FreeIM: typeof FreeIM
    }
}