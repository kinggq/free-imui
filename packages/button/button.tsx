import { defineComponent } from "vue";

export default defineComponent({
    name: 'free-button',
    setup() {
        return () => {
            return <button>发送</button>
        }
    }
})