import { defineComponent, inject } from "vue";
import { makeBooleanProp, makeObjectProp } from "~/utils";
import { Message } from "./types";

const templateProps = {
    message: makeObjectProp<Message>(),
    reverse: makeBooleanProp(false),
    messageName: makeBooleanProp(false),
}

export default defineComponent({
    name: 'free-message-template',
    props: templateProps,
    emits: ['message-click'],
    setup(props, { slots, emit }) {
        const freeIM: any = inject('freeIM')

        const _emit = (e: Event, key: string) => {
            freeIM.$emit('message-click', e, key, props.message, freeIM)
        }

        const handleError = (e: Event) => {
            _emit(e, 'status')
        }

        const handleClickContent = (e: Event) => {
            _emit(e, 'content')
        }

        const handleClickAvatar = (e: Event) => {
            _emit(e, 'avatar')
        }

        return () => {
            return (
                <div class={`free-message-content free-message-${ props.reverse ? 'right' : 'left'}`} key={ props.message.id }>
                    <free-avatar onClick={ handleClickAvatar } avatar={ props.message.from.avatar } size={ 36 } />
                    <div class="free-message-info">
                        <div class="free-message-username" v-show={ props.messageName }>{ props.message.from.nickname }</div>
                        <div class="free-message-content__wrap">
                            <div class="free-message-content__text" onClick={ handleClickContent }>
                                { slots['content']?.(props.message) }
                            </div>
                            <div style="padding-left: 10px;"></div>
                            <div class="free-message-content__status">
                                <i class="free-icon-loading" v-show={ props.message.status === 'uploading' }></i>
                                <i class="free-icon-error" v-show={ props.message.status === 'error' } onClick={ handleError }></i>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
})
