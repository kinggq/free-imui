import { defineComponent, ref } from "vue";

export default defineComponent({
    name: 'free-editor',
    emits: ['send'],
    setup(_, { emit }) {
        const textarea = ref<HTMLElement>()

        const onKeydown = (event: KeyboardEvent) => {
            if (event.code === 'Enter') {
                
                // event.preventDefault()
                
                if (event.ctrlKey) {
                    handleSend()
                }
                
            }
        }

        function handleSend() {
            console.log('发送')
            emit('send', textarea.value?.innerHTML)
        }

        return () => {
            return (
                <div class="free-editor">
                    <div class="free-editor-tool"></div>
                    <div class="free-editor-content">
                        <div
                            ref={ textarea }
                            class="free-editor-textarea"
                            contenteditable
                            spellcheck="false"
                            onKeydown={ onKeydown }
                        />
                    </div>
                    <div class="free-editor-footer">
                        <div class="free-editor-footer__inner">
                            <div class="free-editor-footer__text">ctrl + enter 快捷发送消息</div>
                            <free-button onClick={ handleSend }>发送</free-button>
                        </div>
                    </div>
                </div>
            )
        }
    }
})