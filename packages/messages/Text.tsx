import { defineComponent } from "vue";
import { Message } from "./types";

export default defineComponent({
    name: 'free-message-text',
    setup(_, { attrs }){
        
        return () => {
            return (
                <free-message-template
                    class="free-message-image"
                    v-slots={{
                        content: (props: Message) => <span v-html={props.content} />
                    }}
                    { ...attrs }
                />
            )
        }
    }
})