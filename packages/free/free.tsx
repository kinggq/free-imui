import { defineComponent } from "vue";

export default defineComponent({
    name: 'free-im',
    props: {
        width: {
            type: String || Number,
            default: 860
        },
        height: {
            type: String || Number,
            default: 580
        }
    },
    setup(props) {
        const { width, height } = props
        const wrapper_style = {
            width: width + 'px',
            height: height + 'px'
        }
        return () => {
            return (
                <div class={`free-wrapper free-theme-default`} style={ wrapper_style }>

                </div>
            )
        }
    }
})