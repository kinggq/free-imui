import { defineComponent, ExtractPropTypes, reactive, ref, nextTick, computed } from "vue";
import { useMenus } from '../hooks'
import { isFunction, makeObjectProp, guid, isArray } from '../utils'
import { MenuType } from "../utils/types";
import { useExpose } from "../hooks/use-expose";
import { Contact } from '../contact/types'
import {
    Message,
    User,
    MessageInstance,
    MessageStatus,
    MessageType
} from '../index'

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
        const curContact = ref<Contact>()
        const currentContact = ref<Contact>()
        const messagesBucket = reactive(new Map<string | number, Message[]>())
        const messageLoadedBucket = reactive(new Map())
        const loadingBucket = reactive(new Map())
        const lockBucket = reactive(new Map())
        const menus = useMenus()
        const msgRef = ref<MessageInstance | null>(null)

        const lastMessages = computed(() => {
            const data = contacts.value.filter(contact => contact.lastMessage)
            data.sort((c1, c2) => {
                return (c2.lastMessageTime ? c2.lastMessageTime : 0) - (c1.lastMessageTime ? c1.lastMessageTime : 0)
            })
            return data
        })

        const allUnread = computed(() => {
            let unread =  0
            lastMessages.value.forEach(contact => {
                unread += contact.unread
            })
            return unread
        })

        function renderMenuItem() {
            const top: HTMLElement | JSX.Element[] = []
            const bottom: HTMLElement | JSX.Element[] = []
            menus.value.forEach(menu => {
                const node = <div class={`free-menu-item ${activeMenu.value === menu.key ? 'free-menu-active' : ''}`} title={menu.title} onClick={() => {
                    isFunction(menu.click) ? menu.click : changeMenu(menu)
                }}>
                    {
                        menu.key === 'messages' ?
                        <free-badge unread={ allUnread.value }>
                           { menu.render() }
                        </free-badge> : menu.render() 
                    }
                    
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
                        <free-avatar class="free-menu-avatar" avatar={ props.userInfo.avatar } />
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
            })
            
            sortContacts()
        }

        function renderMessages() {
            const click = (contact: Contact) => {
                updateUnread(contact)
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
                return (
                    <free-contact {...activeClass(contact.id, currentContact.value?.id)} onClick={() => {click(contact)}} contact={contact} is-message />
                )
            })
        }

        function updateUnread(contact: Contact) {
            const index = findContactById(contact.id)
            contacts.value[index].unread = 0
        }


        function pullMessages(isEnd?: (end: boolean) => void) {
            
            const contact = currentContact.value!
            if (!messagesBucket.has(contact.id))
                messagesBucket.set(contact.id, [])

            if (lockBucket.has(contact.id)) return

            const len = messagesBucket.has(contact.id) ? messagesBucket.get(contact.id)?.length : 0
            
            loadingBucket.set(contact.id, true)
            
            lockBucket.set(contact.id, true)

            emit('pull-messages', contact, async (messages: Message[], end: any) => {
                
                if(messages.length === 0) {
                    
                }
                addMessage(messages, contact.id, 'unshift')
                // messagesBucket.get(contact.id)?.unshift(...messages)
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
            const message = createMessage(content)
            appendMessage(message)
            emit('send', currentContact.value, message, (message: Message, contact: Contact, status: MessageStatus = 'success') => {
                updateMessage(message, contact, status)
                updateContact({
                    id: contact.id,
                    lastMessageTime: message.time,
                    lastMessage: message.content,
                    lastMessageStatus: message.status,
                    unread: 0
                })
            })
        }
        
        function updateMessage(message: Message, contact: Contact, status: MessageStatus) {
            console.log(message, contact)
            if (messagesBucket.has(contact.id)) {
                const index = messagesBucket.get(contact.id)?.findIndex(item => item.id === message.id)
                console.log(index)
                if (index !== -1) {
                    messagesBucket.get(contact.id)![index!].status = status
                }
                
            }
        }

        function updateContact(data: any) {
            const id = data.id
            delete data.id
            const index = findContactById(id)
            if (index !== -1) {
                data.unread = data.unread + contacts.value[index].unread
                contacts.value[index] = { ...contacts.value[index], ...data }
            }
            
            // let index: number
            // if (message.toContactId === props.userInfo.id) {
            //     index = findContactById(message.from.id)
            // } else {
            //     index = findContactById(message.toContactId)
            // }
            
            // console.log(contacts.value[index])
            // if (index > -1) {
            //     contacts.value[index].lastMessage = message.content
            //     contacts.value[index].lastMessageTime = message.time
            //     contacts.value[index].lastMessageStatus = message.status

            //     if (unread){
            //         contacts.value[index].unread += unread
            //     }
            // }
        }

        function findContactById(id: string | number) {
            if (!id) return -1
            return contacts.value.findIndex(item => item.id === id)
        }
        /* 

        */
        function appendMessage(message: Message, scrollToBottom = false) {
            console.log(message)
            if (!messagesBucket.has(message.toContactId)) {
                updateContact({
                    id: message.toContactId,
                    unread: 1,
                    lastMessageTime: message.time,
                    lastMessage: message.content
                })
                
            } else {
                addMessage(message, message.toContactId, 'push')
                const updateContactData = {
                    id: message.toContactId,
                    lastMessageTime: message.time,
                    lastMessage: message.content,
                    lastMessageStatus: message.status,
                    unread: 0
                }
                if (message.toContactId === currentContact.value?.id) {
                    msgRef.value?.scrollToBottom()
                } else {
                    updateContactData.unread = 1
                }
                updateContact(updateContactData)
            }

            // if (scrollToBottom) {
            //     msgRef.value?.scrollToBottom()
            // }
        }

        function addMessage(message: Message | Message[], contactId: string | number, type: 'unshift' | 'push') {
            if (!isArray(message)) message = [ message ]
            messagesBucket.set(contactId, messagesBucket.get(contactId) || [])
            messagesBucket.get(contactId)![type](...message)
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
            initContacts,
            appendMessage
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