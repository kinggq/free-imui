import { defineComponent, ref } from "vue";
import { useMenus } from '../hooks'
import { isFunction } from '../_util'
import { ContactType, MenuType } from "../_util/types";
export default defineComponent({
    name: 'free-im',
    props: {
        width: {
            type: [ String, Number ],
            default: 860
        },
        height: {
            type: [ String, Number ],
            default: 580
        }
    },
    setup(props, { slots, expose }) {
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
            const content = () => {
                let arr = []
                for (let i = 1; i < 100; i++) {
                    arr.push(<div>消息列表{i}</div>)
                }
                return arr
            }
            return (
                <>
                    <div class="free-sidebar free-sidebar-messages" v-show={ activeMenu.value === 'messages' }>
                        <div class="free-messages-fiexd_top">
                            { slots['messages-fixed-top'] ? slots['messages-fixed-top']() : '' }
                        </div>
                        { content() }
                    </div>
                    <div class="free-sidebar free-sidebar-messages" v-show={ activeMenu.value === 'contacts' }>
                        好友列表
                    </div>
                </>
            )
        }

        function initContacts(_contacts: ContactType[]) {
            contacts.value = _contacts
            console.log(contacts.value)
        }

        
        expose({
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