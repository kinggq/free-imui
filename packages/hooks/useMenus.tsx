import { ref } from 'vue'
import { MenuType } from '../utils/types'
import { defaultMenus } from '../utils/constant'

const defaultMenusIndex: {
    [key: string]: number
} = {
    messages: 0,
    contacts: 1
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
}