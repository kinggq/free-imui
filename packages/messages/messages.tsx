
import { defineComponent, ref, nextTick, ExtractPropTypes, inject } from "vue";
import { useExpose } from '../hooks/use-expose';
import { makeArrayProp, makeNumericProp } from '../utils'

const messagesProps = {
    data: makeArrayProp(),
    contactId: makeNumericProp('')
}

export type MessageProps = ExtractPropTypes<typeof messagesProps>

export default defineComponent({
    name: 'free-messages',
    props: messagesProps,
    inject: ['userInfo'],
    setup(props, { emit }) {
        const root = ref<HTMLElement>()
        const loading = ref(true)
        const userInfo: any = inject('userInfo')
        
        const onScroll = (event: Event) => {
            const target = event.target as HTMLInputElement
            if (target.scrollTop === 0) {
                console.log('到顶部了')
                emit('load', (end: boolean) => {
                    console.log(11)
                    loading.value = false
                })
            }
        }

        nextTick(() => {
            if (root.value) {
                root.value.scrollTop = root.value.scrollHeight
            }
        })

        function resetLoading() {
            loading.value = false
        }

        useExpose({
            loading,
            resetLoading
        })

        
        
        return () => {
            function innerMessages() {
                return props.data.map((msg: any, index) => {
                    return <div class={`free-message-${ userInfo.contactId === msg.contactId ? 'right' : 'left'}`} style="height: 100px;" key={ msg.id }>
                            { msg.content },{index}
                        </div>
                    
                })
            }
            return (
                <div ref={ root } class="free-messages" onScroll={ onScroll }>
                    <div class="free-messages-loading">
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
