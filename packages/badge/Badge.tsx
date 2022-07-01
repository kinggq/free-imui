import { defineComponent } from "vue";
import { makeNumericProp } from "../utils";

const badgeProps = {
    unread: makeNumericProp(0)
}

export default defineComponent({
    name: 'free-badge',
    props: badgeProps,
    setup(props, { slots }) {
        return () => {
            return (
                <div class="free-badge">
                    { slots.default && slots.default() }
                    <div class="free-badge-dot" v-show={ props.unread !== 0 }>
                        { props.unread > 99 ? '99+' : props.unread }
                    </div>
                </div>
            )
        }
    }
})