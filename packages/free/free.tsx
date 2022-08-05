import { defineComponent, ExtractPropTypes, reactive, ref, nextTick, computed } from "vue";
import { useMenus } from '../hooks'
import { isFunction, makeObjectProp, guid, isArray, makeBooleanProp, makeStringProp, isString } from '../utils'
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
import { UpdateMessage } from "./types";

const freeProps = {
    width: makeNumericProp(860),
    height: makeNumericProp(580),
    shape: makeStringProp<'circle' | 'square'>('square'),
    userInfo: makeObjectProp<User>(),
    messageName: makeBooleanProp(false),
    menuAvatar: makeBooleanProp(true)
}

export type FProps = ExtractPropTypes<typeof freeProps>

export default defineComponent({
    name: 'free-im',
    props: freeProps,
    provide() {
        return {
            userInfo: this.userInfo,
            freeIM: this
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
        const currentContactId = ref<string | number>()
        const messagesBucket = reactive(new Map<string | number, Message[]>())
        const messageLoadedBucket = reactive(new Map())
        const loadingBucket = reactive(new Map())
        const lockBucket = reactive(new Map())
        const menus = useMenus()
        const msgRef = ref<MessageInstance | null>(null)

        const currentContact = computed(() => {
            return contacts.value.find(contact => contact.id === currentContactId.value)
        })

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
                    isFunction(menu.click) ? menu.click : changeMenuClick(menu)
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

            function changeMenuClick(menu: MenuType) {
                if (menu.bottom) return
                changeMenu(menu.key)
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
                        <free-avatar v-show={ props.menuAvatar } class="free-menu-avatar" avatar={ props.userInfo.avatar } />
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

        function changeMenu(menuName: string) {
            emit('change-menu', menuName)
            activeMenu.value = menuName
        }

        function changeContact(contactId: string | number, menuName?: string) {
            if (menuName) {
                changeMenu(menuName)
            } else {
                if (contactId === currentContactId.value) return
            }

            currentContactId.value = contactId
            emit('change-contact', currentContact.value)

            if(!messagesBucket.has(contactId)) {
                pullMessages(() => {
                    if (msgRef.value){
                        
                        msgRef.value.scrollToBottom()
                    }
                })
            } else {
                loadingBucket.set(contactId, false)
            }
        }

        function renderMessages() {
            const click = (contact: Contact) => {
                updateUnread(contact)
                currentContactId.value = contact.id
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
                    <free-contact {...activeClass(contact.id, currentContactId.value)} onClick={() => {click(contact)}} contact={contact} is-message />
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

            emit('pull-messages', contact, async (messages: Message[], end?: boolean) => {
                
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
                    <free-contact {...activeClass(contact.id, curContact.value?.id)} onClick={click} contact={contact} base />
                ]
                curIndex = contact.sort
                return node
            })
            return [
                <div class="free-contact-category-label">群聊</div>,
                groups.value.map(group => {
                    return <free-contact {...activeClass(group.id)} onClick={click} contact={group} base />
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
            return messageLoadedBucket.has(currentContactId.value) ? 
            messageLoadedBucket.get(currentContactId.value) : false
        })

        const currentLoading = computed(() => {
            if (loadingBucket.has(currentContactId.value)) {
                return loadingBucket.get(currentContactId.value)
            }
            return true
        })

        const lastMessageRender = (message: Message) => {
            if (message.type === 'file') {
                return '[文件]'
            } else if (message.type === 'image') {
                return '[图片]'
            }
            return message.content
        }

        const handleSend = (content: string) => {
            console.log(content)
            const message = createMessage({ content })
            appendMessage(message)
            if (!currentContact.value) return
            _emitSend(currentContact.value, message, (contact) => {
                updateContact({
                    id: contact.id,
                    lastMessageTime: message.time,
                    lastMessage: lastMessageRender(message),
                    lastMessageStatus: message.status,
                    unread: 0
                })
            })
        }

        function _emitSend(
            contact: Contact,
            message: Message,
            next: (contact: Contact) => void,
            file?: File
        ){
            emit('send', contact, message, (message: Message, contact: Contact, status: MessageStatus = 'success') => {
                next(contact)
                updateMessage(Object.assign(message, { status }))
            }, file)
        }
        
        function updateMessage(message: UpdateMessage) {
            if (messagesBucket.has(message.toContactId)) {
                const index = messagesBucket.get(message.toContactId)?.findIndex(item => item.id === message.id)
                if (index !== -1) {
                    const findMessage = messagesBucket.get(message.toContactId)![index!]
                    messagesBucket.get(message.toContactId)![index!] = { ...findMessage, ...message, toContactId: findMessage.toContactId }
                }
                
            }
        }

        function updateContact(data: any) {
            const id = data.id
            delete data.id
            const index = findContactById(id)
            if (index !== -1) {
                const { unread } = data
                if (isString(unread)) {
                    if (unread.indexOf('+') === 0 || unread.indexOf('-') === 0) {
                        data.unread = parseInt(unread) + contacts.value[index].unread
                    }
                }
                // if (data.unread) {
                //     data.unread = data.unread + contacts.value[index].unread
                // }
                contacts.value[index] = { ...contacts.value[index], ...data }
            }
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
                    unread: '+1',
                    lastMessageTime: message.time,
                    lastMessage: lastMessageRender(message)
                })
                
            } else {
                addMessage(message, message.toContactId, 'push')
                const updateContactData = {
                    id: message.toContactId,
                    lastMessageTime: message.time,
                    lastMessage: lastMessageRender(message),
                    lastMessageStatus: message.status,
                    unread: ''
                }
                if (message.toContactId === currentContactId.value) {
                    msgRef.value?.scrollToBottom()
                } else {
                    updateContactData.unread = '+1'
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

        function createMessage(message: any): Message {
            return {
                ...{
                    id: guid(),
                    time: new Date().getTime(),
                    type: 'text',
                    status: 'uploading',
                    toContactId: currentContactId.value!,
                    from: props.userInfo
                },
                ...message
            }
        }

        const handleUpload = (file: File) => {
            const imageTypes = ['image/png', 'image/jpeg', 'image/gif']
            let image
            if (imageTypes.includes(file.type)) {
                image = {
                    content: URL.createObjectURL(file),
                    type: 'image'
                }
            } else {
                image = {
                    type: 'file',
                    fileSize: file.size,
                    fileName: file.name,
                    content: ''
                }
            }
            const message = createMessage(image)
            appendMessage(message)
            if (!currentContact.value) return
            _emitSend(currentContact.value, message, (contact) => {

            }, file)
        }

        function renderContent() {
            const click = () => {
                if (!curContact.value?.lastMessage) {
                    updateContact({
                        id: curContact.value?.id,
                        lastMessage: ' '
                    })
                }
                changeContact(curContact.value?.id!, 'messages')
            }

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
                                <free-button type="primary" onClick={ click }>发送</free-button>
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
                                <free-messages ref={ msgRef } onLoad={ pullMessages } messageName={ props.messageName } data={ messagesBucket.get(currentContact.value.id) } is-end={ currentLoadend.value } loading={ currentLoading.value } />
                                <free-editor contact={ currentContact.value } onSend={ handleSend } onUpload={ handleUpload }/>
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
            appendMessage,
            updateMessage,
            updateContact
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
