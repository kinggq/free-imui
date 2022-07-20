import { defineComponent, ref } from "vue";
const command = (command: string, val?: any) => {
    document.execCommand(command, false, val);
  }
export default defineComponent({
    name: 'free-editor',
    emits: ['send'],
    setup(_, { emit }) {
        const textarea = ref<HTMLElement>()

        const onKeydown = (event: KeyboardEvent) => {
            if (event.code === 'Enter' && !event.ctrlKey && !event.shiftKey) {
                event.preventDefault()
                command("insertLineBreak")
            }
            if (event.code === 'Enter') {
                
                
                if (event.ctrlKey) {
                    handleSend()
                }
                
            }
            
        }

        function handleSend() {
            console.log('发送')
            emit('send', textarea.value?.innerHTML)
            clear()
        }
        
        function clear() {
            textarea.value!.innerHTML = ''
        }

        const fileRef = ref<HTMLInputElement>()
        const changeFile = () => {
            console.log(fileRef.value?.files)
        }

        const handleClickFile = () => {
            fileRef.value?.click()
        }

        const show = ref(false)

        const emojiClick = () => {
            show.value = true
        }

        return () => {
            return (
                <div class="free-editor">
                    <free-dialog v-model={[show.value, 'show']}>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </free-dialog>
                    <input type="file" ref={ fileRef } style="display: none;" onChange={ changeFile } />
                    <div class="free-editor-tool">
                        <div class="free-editor-tool__item" onClick={ emojiClick }>
                            <i class="free-icon-emoji"></i>
                        </div>
                        <div class="free-editor-tool__item">
                            <i class="free-icon-file" onClick={ handleClickFile }></i>
                        </div>
                    </div>
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