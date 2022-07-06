import { defineComponent } from "vue";
import { makeNumberProp, makeStringProp } from '../utils'

const avatarProps = {
    avatar: makeStringProp('头像'),
    size: makeNumberProp(40),
}

export default defineComponent({
    props: avatarProps,
    name: 'free-avatar',
    setup(props) {
        return () => {
            return (
                <div class="free-avatar" style={`width: ${props.size}px;height: ${props.size}px;line-height: ${props.size}px;`}>
                    { props.avatar ? props.avatar.substr(-2) : props.avatar }
                </div>
            )
        }
    }
})