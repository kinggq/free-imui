export interface ContactType {
    id: string | number | null,
    nickname: string,
    avatar: string,
    sort: string,
    lastMessage: string | null,
    lastMessageTime: number | null,
    unread: number,
    group?: boolean
}