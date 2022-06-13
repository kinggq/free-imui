export interface MenuType {
    key: string,
    title: string,
    unread: number,
    click: null,
    bottom: boolean,
    render: () => JSX.Element | HTMLElement
}

export interface ContactType {
    id: string | number | null,
    nickname: string,
    avatar: string,
    sort: string | null,
    lastMessage: string | null,
    lastMessageTime: number | null,
    unread: number
}