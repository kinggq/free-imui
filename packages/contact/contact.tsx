import { defineComponent } from "vue";
import { ContactType } from "./types";
import { makeObjectProp, makeBooleanProp, formatDay } from '../utils'
const contactProps = {
    contact: makeObjectProp<ContactType>(),
    isMessage: makeBooleanProp(false)
}

export default defineComponent({
    name: 'free-contact',
    props: contactProps,
    setup(props) {
        const { avatar, nickname, lastMessage, lastMessageTime } = props.contact

        return () => {
            return (
                <div class="free-contact">
                    <free-avatar avatar={ avatar } />
                    {
                    props.isMessage ?

                    <div class="contact-content">
                        <div class="contact-info">
                            <div class="contact-nickname">{ nickname }</div>
                            <div class="contact-lastmsg-time" v-show={ props.isMessage }>{ lastMessageTime && formatDay(lastMessageTime) }</div>
                        </div>
                        <div class="contact-action" v-show={ props.isMessage }>
                            <div class="contact-lastmsg">{ lastMessage }</div>
                            <div class="contact-ban"></div>
                        </div>
                    </div>
                    :
                    <div class="contact--nickname">{ nickname }</div>}
                </div>
            )
        }
    }
})