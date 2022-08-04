import { defineComponent } from "vue";
import { Message } from "./types";
import { makeObjectProp } from '../utils'

const eventProps = {
    message: makeObjectProp<Message>()
}

export default defineComponent({
    props: eventProps,
    name: 'free-message-event',
    setup(props){
        return () => {
            return (
                <div class="free-message-content free-message-event">
                    <span class="free-message-event__content">
                        { props.message.content }
                    </span>
                </div>
            )
        }
    }
})
