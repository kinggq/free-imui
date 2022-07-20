import { defineComponent } from "vue";
import { makeStringProp } from '../utils'

const buttonProps = {
    type: makeStringProp('default'),
    size: makeStringProp('default')
}

export default defineComponent({
    name: 'free-button',
    props: buttonProps,
    setup(props, { slots }) {
        const cls = props.type
        return () => {
            return (
                <button class={`free-button free-button-${cls} free-button-size__${props.size}`}>
                    { slots.default ? slots.default() : '' }
                </button>
            )
        }
    }
})