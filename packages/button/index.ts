import { App } from 'vue'
import Button from './Button'
import './index.less'

Button.install = (app: App) => {
    app.component(Button.name, Button)
}

export {
    Button
}
export default Button
