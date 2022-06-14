import { defineComponent, ExtractPropTypes, ref } from "vue";
import { useMenus } from '../hooks'
import { isFunction } from '../utils'
import { MenuType } from "../utils/types";
import { useExpose } from "../hooks/use-expose";
import { ContactType } from '../contact/types'
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
    setup(props, { slots }) {
        console.log(slots)
        const { width, height } = props
        const wrapper_style = {
            width: width + 'px',
            height: height + 'px'
        }
        const activeMenu = ref('messages')
        const contacts = ref<ContactType[]>([])
        const menus = useMenus()
        
        function renderMenuItem() {
            const top: HTMLElement | JSX.Element[] = []
            const bottom: HTMLElement| JSX.Element[] = []
            menus.value.forEach(menu => {
                const node = <div class={`free-menu-item ${ activeMenu.value === menu.key ? 'free-menu-active':''}`} title={ menu.title } onClick={ () => {
                    isFunction(menu.click) ? menu.click : changeMenu(menu)
                } }>
                    { menu.render() }
                </div>
                !menu.bottom ? top.push(node) : bottom.push(node)
            })

            function changeMenu (menu: MenuType) {
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
                        { renderMenuItem().top }
                    </div>
                    <div class="free-menu-bottom">
                        { renderMenuItem().bottom }
                    </div>
                </div>
            )
        }

        function renderSidebar() {
            return (
                <>
                    <div class="free-sidebar free-sidebar-messages" v-show={ activeMenu.value === 'messages' }>
                        <div class="free-messages-fiexd_top">
                            { slots['messages-fixed-top'] ? slots['messages-fixed-top']() : '' }
                        </div>
                        { renderMessages() }
                    </div>
                    <div class="free-sidebar free-sidebar-messages" v-show={ activeMenu.value === 'contacts' }>
                        { renderContacts() }
                    </div>
                </>
            )
        }

        function initContacts(_contacts: ContactType[]) {
            contacts.value = _contacts
            sortContacts()
            console.log(contacts.value)
        }

        function renderMessages() {
            let curIndex: string | null = ''
            return contacts.value.map(contact => {
                
                const node = [
                    contact.group ? <div class="free-group-label">群</div> : <div class="free-group-label">联系人</div>,
                    contact.sort !== curIndex ? <div class="free-index">{ contact.sort }</div> : '',
                    <free-contact contact={contact} is-message />
                ]
                curIndex = contact.sort
                return node
            })
        }

        function renderContacts() {
            return contacts.value.map(contact => {
                return <free-contact contact={contact} />
            })
        }

        function sortContacts() {
            contacts.value.sort((a, b) => {
                if (a.group) {
                    return 1
                }
                return a.sort.localeCompare(b.sort);
            })
        }

        
        useExpose({
            useMenus,
            initContacts
        })

        return () => {
            return (
                <div class={`free-wrapper free-theme-default`} style={ wrapper_style }>
                    { renderMenu() }
                    { renderSidebar() }
                </div>
            )
        }
    },
})