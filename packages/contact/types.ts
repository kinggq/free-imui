import { MessageStatus } from "../messages"
export type Contact = {
    id: string | number,
    nickname: string,
    avatar: string,
    sort: string,
    lastMessage: string | null,
    lastMessageStatus: MessageStatus
    lastMessageTime: number | null,
    unread: number,
    group?: boolean
}