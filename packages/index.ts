import { App } from 'vue'
import FreeIM from './free'
import FreeButton from './button'
import './styles'

const components = [ FreeIM, FreeButton ]

const install = (app:App) => {
    components.map(component => app.component(component.name, component))
}

export {
    FreeIM,
    FreeButton
}

export default {
    install
}