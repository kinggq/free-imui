import { defineComponent, ExtractPropTypes, reactive, ref, nextTick, computed } from "vue";
import { useMenus } from '../hooks'
import { isFunction, makeObjectProp, guid } from '../utils'
import { MenuType } from "../utils/types";
import { useExpose } from "../hooks/use-expose";
import { Contact } from '../contact/types'
import { Message, User, MessageInstance } from '../index'
import {
    makeNumericProp
} from '../utils'
const freeProps = {
    width: makeNumericProp(860),
    height: makeNumericProp(580),
    userInfo: makeObjectProp<User>()
}

export type FProps = ExtractPropTypes<typeof freeProps>

export default defineComponent({
    name: 'free-im',
    props: freeProps,
    provide() {
        return {
            userInfo: this.userInfo
        }
    },
    setup(props, { slots, emit }) {
        const { width, height } = props
        const wrapper_style = {
            width: width + 'px',
            height: height + 'px'
        }
        const activeMenu = ref('messages')
        const contacts = ref<Contact[]>([])
        const groups = ref<Contact[]>([])
        const lastMessages = ref<Contact[]>([])
        const curContact = ref<Contact>()
        const currentContact = ref<Contact>()
        const messagesBucket = reactive(new Map())
        const messageLoadedBucket = reactive(new Map())
        const loadingBucket = reactive(new Map())
        const lockBucket = reactive(new Map())
        const menus = useMenus()
        const msgRef = ref<MessageInstance | null>(null)

        function renderMenuItem() {
            const top: HTMLElement | JSX.Element[] = []
            const bottom: HTMLElement | JSX.Element[] = []
            menus.value.forEach(menu => {
                const node = <div class={`free-menu-item ${activeMenu.value === menu.key ? 'free-menu-active' : ''}`} title={menu.title} onClick={() => {
                    isFunction(menu.click) ? menu.click : changeMenu(menu)
                }}>
                    {menu.render()}
                </div>
                !menu.bottom ? top.push(node) : bottom.push(node)
            })

            function changeMenu(menu: MenuType) {
                if (menu.bottom) return
                activeMenu.value = menu.key
            }

            return {
                top,
                bottom
            }
        }

        function renderMenu() {
            return (
                <div class="free-menu">
                    <div class="free-menu-top">
                        <free-avatar class="free-menu-avatar" />
                        {renderMenuItem().top}
                    </div>
                    <div class="free-menu-bottom">
                        {renderMenuItem().bottom}
                    </div>
                </div>
            )
        }

        function renderSidebar() {
            return (
                <>
                    <div class="free-sidebar free-sidebar-messages" v-show={activeMenu.value === 'messages'}>
                        <div class="free-messages-fiexd_top">
                            {slots['messages-fixed-top'] ? slots['messages-fixed-top']() : ''}
                        </div>
                        {renderMessages()}
                    </div>
                    <div class="free-sidebar free-sidebar-messages" v-show={activeMenu.value === 'contacts'}>
                        {renderContacts()}
                    </div>
                </>
            )
        }

        function initContacts(_contacts: Contact[]) {
            _contacts.forEach(contact => {
                if (contact.group) {
                    groups.value.push(contact)
                } else {
                    contacts.value.push(contact)
                }
                if (contact.lastMessage) {
                    lastMessages.value.push(contact)
                }
            })
            // if (lastMessages.value.length > 0) {
            //     currentContact.value = lastMessages.value[0]
            // }
            sortContacts()
        }

        function renderMessages() {
            const click = (contact: Contact) => {
                currentContact.value = contact
                if(!messagesBucket.has(contact.id)) {
                    pullMessages(() => {
                        if (msgRef.value){
                            
                            msgRef.value.scrollToBottom()
                        }
                    })
                } else {
                    loadingBucket.set(contact.id, false)
                    msgRef.value?.scrollToBottom()
                }
            }

            return lastMessages.value.map(contact => {
                return <free-contact {...activeClass(contact.id, currentContact.value?.id)} onClick={() => {click(contact)}} contact={contact} is-message />
            })
        }


        function pullMessages(isEnd?: (end: boolean) => void) {
            
            const contact = currentContact.value!
            if (lockBucket.has(contact.id)) return

            const len = messagesBucket.has(contact.id) ? messagesBucket.get(contact.id).length : 0
            
            loadingBucket.set(contact.id, true)
            
            lockBucket.set(contact.id, true)

            emit('pull-messages', contact, async (messages: Message[], end: any) => {
                
                if(messages.length === 0) {
                    
                }
                
                if (messagesBucket.has(contact.id)) {
                    messagesBucket.get(contact.id).unshift(...messages)
                } else {
                    messagesBucket.set(contact.id, messages)
                }
                messageLoadedBucket.set(contact.id, end)
                
                loadingBucket.set(contact.id, false)
                lockBucket.delete(contact.id)
                isEnd && isEnd(!!end)
            }, len)
        }

        const activeClass = (id: number | string | null, curCid?: number | string | null) => {
            return {
                class: curCid === id ? 'free-contact-active' : ''
            }
        }

        function renderContacts() {
            const click = (data: Contact) => {
                curContact.value = data
            }

            let curIndex: string | null = ''
            const contactNode = contacts.value.map(contact => {
                const node = [
                    contact.sort !== curIndex ? <div class="free-index">{contact.sort}</div> : '',
                    <free-contact {...activeClass(contact.id, curContact.value?.id)} onClick={click} contact={contact} />
                ]
                curIndex = contact.sort
                return node
            })
            return [
                <div class="free-contact-category-label">群聊</div>,
                groups.value.map(group => {
                    return <free-contact {...activeClass(group.id)} onClick={click} contact={group} />
                }),
                <div class="free-contact-category-label">联系人</div>,
                contactNode
            ]
        }

        function sortContacts() {
            contacts.value.sort((a, b) => {
                if (a.group) {
                    return a.sort.localeCompare(b.sort)
                }
                return a.sort.localeCompare(b.sort);
            })
        }

        const currentLoadend = computed(() => {
            return messageLoadedBucket.has(currentContact.value?.id) ? 
            messageLoadedBucket.get(currentContact.value?.id) : false
        })

        const currentLoading = computed(() => {
            if (loadingBucket.has(currentContact.value?.id)) {
                return loadingBucket.get(currentContact.value?.id)
            }
            return true
        })

        const handleSend = (content: string) => {
            console.log(content)
            appendMessage(createMessage(content))
            emit('send', currentContact.value, createMessage(content), (status: string) => {
                messagesBucket.get(currentContact.value?.id).push()
            })
        }

        function appendMessage(message: Message, scrollToBottom = true) {
            if (messagesBucket.has(currentContact.value?.id)) {
                messagesBucket.get(currentContact.value?.id).push(message)
            } else {
                messagesBucket.set(currentContact.value?.id, [message])
            }

            if (scrollToBottom) {
                msgRef.value?.scrollToBottom()
            }
        }

        function createMessage(text: string): Message {
            return {
                id: guid(),
                time: new Date().getTime(),
                type: 'text',
                status: 'uploading',
                content: text,
                toContactId: currentContact.value?.id!,
                from: props.userInfo
            }
        }

        function renderContent() {
            const detailNode = () => {
                if (activeMenu.value === 'contacts' && curContact.value) {
                    if (slots['contact-detail']) {
                        return slots['contact-detail']({ contact: curContact.value })
                    }
                    return (
                        <div class="free-contact-main">
                            <div class="free-contact-detail_header">
                                <free-avatar avatar={curContact.value?.avatar} />
                                <div class="free-contact-nickname">{curContact.value?.nickname}</div>
                            </div>
                            <div class="free-contact-detail_body">

                            </div>
                            <div class="free-contact-detail_footer">
                                <free-button type="primary">发送</free-button>
                            </div>
                        </div>
                    )
                } else if (activeMenu.value === 'messages' && currentContact.value) {
                    return (
                        <div class="free-contact-main">
                            <div class="free-contact-messages_header">
                                <span>{ currentContact.value.nickname }</span>
                                <i class="free-icon-more"></i>
                            </div>
                            <div class="free-contact-messages_body">
                                <free-messages ref={ msgRef } onLoad={ pullMessages } data={ messagesBucket.get(currentContact.value.id) } is-end={ currentLoadend.value } loading={ currentLoading.value } />
                                <free-editor onSend={ handleSend } />
                            </div>
                        </div>
                    )
                }
                return undefined
            }

            return (
                <div class="free-content">
                    {detailNode()}
                </div>
            )
        }


        useExpose({
            useMenus,
            initContacts
        })

        return () => {
            return (
                <div class={`free-wrapper free-theme-default`} style={wrapper_style}>
                    {renderMenu()}
                    {renderSidebar()}
                    {renderContent()}
                </div>
            )
        }
    },
})