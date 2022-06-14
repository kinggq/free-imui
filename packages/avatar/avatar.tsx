import { defineComponent } from "vue";
import { makeStringProp } from '../utils'

const avatarProps = {
    avatar: makeStringProp('头像')
}

export default defineComponent({
    props: avatarProps,
    name: 'free-avatar',
    setup(props) {
        return () => {
            return (
                <div class="free-avatar">
                    { props.avatar ? props.avatar.substr(-2) : props.avatar }
                </div>
            )
        }
    }
})