import { defineComponent, ref, nextTick } from "vue";

export default defineComponent({
    name: 'free-messages',
    setup() {
        const root = ref<HTMLElement>()
        const onScroll = (event: Event) => {
            console.log(event)
        }

        nextTick(() => {
            console.log(root)
        })

        window.addEventListener('scroll', onScroll)

        return () => {
            
            return (
                <div ref={ root } class="free-messages" on-scroll={ onScroll }>
                    
                </div>
            )
        }
    }
})