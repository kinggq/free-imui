
import { defineComponent, ref, nextTick, ExtractPropTypes, inject, computed } from "vue";
import { useExpose } from '../hooks/use-expose';
import { makeArrayProp, makeBooleanProp, makeNumericProp } from '../utils'
import { Message } from "./types";

const messagesProps = {
    data: makeArrayProp<Message>(),
    contactId: makeNumericProp(''),
    isEnd: makeBooleanProp(false),
    loading: makeBooleanProp(true),
    messageName: makeBooleanProp(false)
}

export type MessageProps = ExtractPropTypes<typeof messagesProps>

/* 
    1.首次进入
    2.滚动条到顶部，有消息的情况下
*/

export default defineComponent({
    name: 'free-messages',
    props: messagesProps,
    setup(props, { emit }) {
        const root = ref<HTMLElement>()
        const userInfo: any = inject('userInfo')
        const loading = ref(true)
        const onScroll = (event: Event) => {
            if (props.isEnd) {
                return
            }
            loading.value = true
            const target = event.target as HTMLInputElement
            if (target.scrollTop === 0) {
                console.log('触发加载...')
                emit('load')
            }
        }

        function scrollToBottom() {
            nextTick(() => {
                if (root.value) {
                    root.value.scrollTop = root.value.scrollHeight
                }
            })
        }


        const loadStatus = computed(() => {
            if (props.isEnd) return false
            return props.loading
        })

        useExpose({
            scrollToBottom
        })
        
        return () => {
            function innerMessages() {
                return props.data.map((msg, index) => {
                    
                })
            }
            console.log(props.data)
            return (
                <div ref={ root } class="free-message" onScroll={ onScroll }>
                    <div class={`free-messages-loading`}>
                        <i class="free-icon-loading" v-show={loadStatus.value}></i>
                        <div class="free-messages-load_text" v-show={ props.isEnd }>暂无更多消息</div>
                    </div>
                    {
                        
                        props.data.map((message, index) => {
                            const tagName = `free-message-${message.type}`
                            console.log('tagName', tagName)
                            let attrs = {
                                message,
                                reverse: userInfo.id === message.from.id,
                                messageName: props.messageName,
                            }
                            return (
                                message.type === 'image' ?
                                <free-message-image { ...attrs } />
                                : message.type === 'file' ?
                                <free-message-file { ...attrs } />
                                : <free-message-text { ...attrs } />
                            )
                        })
                    }
                </div>
            )
        }
    },
})
