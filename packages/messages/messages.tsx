import { defineComponent, ref, nextTick, ExtractPropTypes } from "vue";
import { useExpose } from '../hooks/use-expose';
import { makeArrayProp } from '../utils'

const messagesProps = {
    data: makeArrayProp()
}

export type MessageProps = ExtractPropTypes<typeof messagesProps>

export default defineComponent({
    name: 'free-messages',
    props: messagesProps,
    setup(props, { emit }) {
        const root = ref<HTMLElement>()
        const loading = ref(true)
        
        const onScroll = (event: Event) => {
            const target = event.target as HTMLInputElement
            if (target.scrollTop === 0) {
                console.log('到顶部了')
                emit('load', length)
            }
        }

        nextTick(() => {
            if (root.value) {
                root.value.scrollTop = root.value.scrollHeight
            }
        })

        useExpose({
            loading
        })

        return () => {
            
            return (
                <div ref={ root } class="free-messages" onScroll={ onScroll }>
                    <div class="free-messages-loading">
                        <i class="free-icon-loading" v-show={loading.value}></i>
                        <div class="free-messages-load_text" v-show={!loading.value}>暂无更多消息</div>
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