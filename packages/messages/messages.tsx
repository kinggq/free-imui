import { defineComponent, ref, nextTick } from "vue";
import { makeArrayProp } from '../utils'

const messagesProps = {
    data: makeArrayProp()
}

export default defineComponent({
    name: 'free-messages',
    props: messagesProps,
    setup(props) {
        const root = ref<HTMLElement>()
        const loading = ref(false)

        const onScroll = (event: Event) => {
            const target = event.target as HTMLInputElement
            if (target.scrollTop === 0) {
                console.log('到顶部了')
            }
        }

        nextTick(() => {
            if (root.value) {
                root.value.scrollTop = root.value.scrollHeight
            }
        })

        return () => {
            
            return (
                <div ref={ root } class="free-messages" onScroll={ onScroll }>
                    <div class="free-messages-loading">
                        <i class="free-icon-loading" v-show={loading}></i>
                        <div class="free-messages-load_text" v-show={!loading}>暂无更多消息</div>
                    </div>
                    {
                        props.data.map((msg: any) => {
                            return (
                                <div>
                                    { msg.content }
                                </div>
                            )
                        })
                    }
                </div>
            )
        }
    }
})