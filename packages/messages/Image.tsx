import { defineComponent } from "vue";
import { Message } from "./types";

export default defineComponent({
    name: 'free-message-image',
    setup(_, { attrs }){
        console.log('iauhsdouasdo', attrs)
        const slots = {
            content: (props: Message) => <img src={ props.content } />
        }
        console.log('image 组件')
        return () => {
            return (
                <free-message-template
                    class="free-message-image"
                    v-slots={ slots }
                    { ...attrs }
                />
            )
        }
    }
})