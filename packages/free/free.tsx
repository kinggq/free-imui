import { defineComponent, ExtractPropTypes, reactive, ref } from "vue";
import { useMenus } from '../hooks'
import { isFunction } from '../utils'
import { MenuType } from "../utils/types";
import { useExpose } from "../hooks/use-expose";
import { Contact } from '../contact/types'
import {
    makeNumericProp
} from '../utils'
const freeProps = {
    width: makeNumericProp(860),
    height: makeNumericProp(580)
}

export type FProps = ExtractPropTypes<typeof freeProps>

export default defineComponent({
    name: 'free-im',
    props: freeProps,
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
        const endBucket = reactive(new Map())
        const currentMessages = ref([])
        const menus = useMenus()

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
                console.log(menu)
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
            if (lastMessages.value.length > 0) {
                currentContact.value = lastMessages.value[0]
            }
            sortContacts()
        }

        function renderMessages() {
            const click = (contacts: Contact) => {
                console.log(contacts)
                currentContact.value = contacts
                emit('pull-messages', contacts, (messages: any, next: any) => {
                    console.log(messages)
                    if(messages.length === 0) {
                        
                    }
                    if (messagesBucket.has(contacts.id)) {
                        messagesBucket.get(contacts.id).push
                    }
                    messagesBucket.set(contacts.id, messages)
                })
            }

            return lastMessages.value.map(contact => {

                return <free-contact {...activeClass(contact.id, currentContact.value?.id)} onClick={click} contact={contact} is-message />
            })
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
                                <free-messages data={ messagesBucket.get(currentContact.value.id) } />
                                <div class="free-editor"></div>
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