import { defineComponent, toRefs } from "vue";
import { Contact } from "./types";
import { makeObjectProp, makeBooleanProp, formatDay } from '../utils'
const contactProps = {
    contact: makeObjectProp<Contact>(),
    isMessage: makeBooleanProp(false),
    base: makeBooleanProp(false),

}

export default defineComponent({
    name: 'free-contact',
    props: contactProps,
    emits: ['click'],
    setup(props, { emit }) {
        
        const onClick = () => {
            emit('click', props.contact)
        }
        return () => {
            return (
                <div class="free-contact" onClick={ onClick }>
                    {props.base}
                    <free-badge unread={ props.base ? undefined : props.contact.unread }>
                        <free-avatar avatar={ props.contact.avatar } />
                    </free-badge>
                    {
                    props.isMessage ?

                    <div class="contact-content">
                        <div class="contact-info">
                            <div class="contact-nickname">{ props.contact.nickname }</div>
                            <div class="contact-lastmsg-time" v-show={ props.isMessage }>{ props.contact.lastMessageTime && formatDay(props.contact.lastMessageTime) }</div>
                        </div>
                        <div class="contact-action" v-show={ props.isMessage }>
                            <div class="contact-content-inner">
                                <i class="free-icon-error" v-show={ props.contact.lastMessageStatus === 'error' }></i>
                                <div class="contact-lastmsg">{ props.contact.lastMessage }</div>
                            </div>
                            <div class="contact-ban"></div>
                        </div>
                    </div>
                    :
                    <div class="contact--nickname">{ props.contact.nickname }</div>}
                </div>
            )
        }
    }
})