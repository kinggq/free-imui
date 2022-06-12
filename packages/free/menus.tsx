export const defaultMenus = [
    {
        key: 'messages',
        title: '消息',
        unread: 0,
        click: null,
        buttom: false,
        render: () => <i class="free-icon-messages"/>
    },
    {
        key: 'contacts',
        title: '联系人',
        unread: 0,
        click: null,
        buttom: false,
        render: () => <i class="free-icon-contacts"/>,
    }
]

const defaultMenusIndex: {
    [key: string]: number
} = {
    messages: 0,
    contacts: 1
}

export interface MenuType {
    key: string,
    title: string,
    unread: number,
    click: () => void,
    buttom: boolean,
    render: () => HTMLElement
}

export default function (customMenus: MenuType | undefined = undefined) {
    let menus = []
    if (Array.isArray(customMenus)) {
        menus = customMenus.map(menu => {
            if (Object.keys(defaultMenusIndex).includes(menu.key)) {
                return defaultMenus[defaultMenusIndex[menu.key]]
            }
            return menu
        })
    }

    return (
        <div class="free-menu">

        </div>
    )
}