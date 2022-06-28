
import { defineComponent, ref, nextTick, ExtractPropTypes, inject } from "vue";
import { useExpose } from '../hooks/use-expose';
import { makeArrayProp, makeBooleanProp, makeNumericProp } from '../utils'

const messagesProps = {
    data: makeArrayProp(),
    contactId: makeNumericProp(''),
    isEnd: makeBooleanProp(false),
}

export type MessageProps = ExtractPropTypes<typeof messagesProps>

export default defineComponent({
    name: 'free-messages',
    props: messagesProps,
    setup(props, { emit }) {
        const root = ref<HTMLElement>()
        const loading = ref(true)
        const userInfo: any = inject('userInfo')
        
        const onScroll = (event: Event) => {
            if (props.isEnd) return
            const target = event.target as HTMLInputElement
            if (target.scrollTop === 0) {
                console.log('到顶部了')
                emit('load', (end: boolean) => {
                    console.log(11)
                    loading.value = false
                })
            }
        }

        function scrollToBottom() {
            nextTick(() => {
                if (root.value) {
                    console.log(root.value.scrollHeight)
                    root.value.scrollTop = root.value.scrollHeight
                }
            })
        }

        function resetLoading() {
            loading.value = true
        }

        function loadend() {
            loading.value = false
        }

        useExpose({
            loading,
            loadend,
            resetLoading,
            scrollToBottom
        })
        
        return () => {
            function innerMessages() {
                return props.data.map((msg: any, index) => {
                    return (
                        <div class={`free-message-content free-message-${ userInfo.id === msg.from.id ? 'right' : 'left'}`} style="height: 100px;" key={ msg.id }>
                            <free-avatar avatar={ msg.from.avatar } />
                            <div class="free-message-info">
                                <div class="free-message-username">{ msg.from.username }</div>
                                <div class="free-message-text">{ msg.content }</div>
                            </div>
                        </div>
                    )
                    
                })
            }
            return (
                <div ref={ root } class="free-messages" onScroll={ onScroll }>
                    <div class={`free-messages-loading`}>
                        <i class="free-icon-loading" v-show={loading.value}></i>
                        <div class="free-messages-load_text" v-show={!loading.value}>暂无更多消息</div>
                    </div>
                    {
                        innerMessages()
                    }
                </div>
            )
        }
    },
})
