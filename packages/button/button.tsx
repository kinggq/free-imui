import { defineComponent } from "vue";
import { makeStringProp } from '../utils'

const buttonProps = {
    type: makeStringProp('default')
}

export default defineComponent({
    name: 'free-button',
    props: buttonProps,
    setup(props) {
        const cls = props.type
        return () => {
            return <button class={`free-button free-button-${cls}`}>发送</button>
        }
    }
})