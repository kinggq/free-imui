import { defineComponent } from "vue";
import { Message } from "./types";

export default defineComponent({
    name: 'free-message-file',
    setup(_, { attrs }){
        return () => {
            return (
                <free-message-template
                    class="free-message-image"
                    v-slots={{
                        content: (props: Message) => [
                            <div class="free-message-file__content">
                                <div class="free-message-file__inner">
                                    <p class="free-message-file__name">{ props.fileName }</p>
                                    <p class="free-message-file__size">{ props.fileSize }</p>
                                </div>
                                <i class="free-icon-file"></i>
                            </div>
                        ]
                    }}
                    { ...attrs }
                />
            )
        }
    }
})