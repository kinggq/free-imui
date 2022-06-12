import { defineComponent } from "vue";
import { useMenus } from '../hooks'
import { isFunction } from '../_util'
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
    setup(props) {
        const { width, height } = props
        const wrapper_style = {
            width: width + 'px',
            height: height + 'px'
        }
        const menus = useMenus()
        
        function renderMenuItem() {
            const top: HTMLElement | JSX.Element[] = []
            const bottom: HTMLElement| JSX.Element[] = []
            menus.value.forEach(menu => {
                const node = <div class="free-menu-item" title={ menu.title } on-click={ () => {
                    isFunction(menu.click) ? menu.click : () => {
                        console.log(111)
                    }
                } }>
                    { menu.render() }
                </div>
                !menu.bottom ? top.push(node) : bottom.push(node)
            })
            
            return {
                top,
                bottom
            }
        }

        function renderMenu() {
            return (
                <div class="free-menu">
                    <div class="free-menu-top">
                        <free-avatar />
                        { renderMenuItem().top }
                    </div>
                </div>
            )
        }

        return {
            wrapper_style,
            useMenus,
            renderMenu
        }
    },
    render() {
        return (
            <div class={`free-wrapper free-theme-default`} style={ this.wrapper_style }>
                { this.renderMenu() }
            </div>
        )
    }
})