import { ref } from 'vue'
const defaultMenus = [
    {
        key: 'messages',
        title: '消息',
        unread: 0,
        click: null,
        bottom: false,
        render: () => <i class="free-icon-messages"/>
    },
    {
        key: 'contacts',
        title: '联系人',
        unread: 0,
        click: null,
        bottom: false,
        render: () => <i class="free-icon-contacts"/>,
    }
]

const defaultMenusIndex: {
    [key: string]: number
} = {
    messages: 0,
    contacts: 1
}

interface MenuType {
    key: string,
    title: string,
    unread: number,
    click: null,
    bottom: boolean,
    render: () => JSX.Element | HTMLElement
}

function useMenus(customMenus: MenuType | undefined = undefined) {
    let menus = ref<MenuType[]>([])
    if (Array.isArray(customMenus)) {
        menus.value = customMenus.map(menu => {
            if (Object.keys(defaultMenusIndex).includes(menu.key)) {
                return defaultMenus[defaultMenusIndex[menu.key]]
            }
            return menu
        })
    } else {
        menus.value = defaultMenus
    }

    return menus
}

export {
    useMenus,
    defaultMenus,
    MenuType
}