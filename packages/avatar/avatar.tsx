import { computed, defineComponent, inject } from "vue";
import { FreeInstance } from "..";
import { makeNumberProp, makeStringProp } from '../utils'

const avatarProps = {
    avatar: makeStringProp('头像'),
    size: makeNumberProp(40),
}

export default defineComponent({
    props: avatarProps,
    name: 'free-avatar',
    inject: ['freeIM'],
    setup(props) {
        const freeIM: FreeInstance | undefined = inject('freeIM')
        const shape = computed(() => freeIM ? freeIM.shape : 'square')
        return () => {
            return (
                <div class={`free-avatar free-avatar-${shape.value}`} style={`width: ${props.size}px;height: ${props.size}px;line-height: ${props.size}px;`}>
                    { props.avatar ? props.avatar.substr(-2) : props.avatar }
                </div>
            )
        }
    }
})
