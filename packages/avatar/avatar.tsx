import { defineComponent } from "vue";

export default defineComponent({
    name: 'free-avatar',
    setup() {
        return () => {
            return (
                <div class="free-avatar">
                    头像
                </div>
            )
        }
    }
})