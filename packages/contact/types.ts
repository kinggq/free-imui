export type Contact = {
    id: string | number,
    nickname: string,
    avatar: string,
    sort: string,
    lastMessage: string | null,
    lastMessageTime: number | null,
    unread: number,
    group?: boolean
}