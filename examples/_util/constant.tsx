import { Contact } from '../../packages'
export const defaultMenus = [
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
    },
    {
        key: 'settings',
        title: '联系人',
        unread: 0,
        click: null,
        bottom: true,
        render: () => <i class="free-icon-menu"/>,
    }
]

export const defaultContacts: Contact[] = [
    {
        id: '1',
        nickname: '猪小明',
        avatar: '猪小明',
        sort: 'Z',
        lastMessage: '今天几点下班？哈哈哈哈哈哈哈',
        lastMessageTime: 1656668389920,
        lastMessageStatus: 'success',
        unread: 100
    },
    {
        id: 2,
        nickname: '茅台',
        avatar: '茅台',
        sort: 'M',
        lastMessage: '晚一点',
        lastMessageTime: 1655114917370,
        lastMessageStatus: 'success',
        unread: 0
    },
    {
        id: 3,
        nickname: '冷檬',
        avatar: '冷檬',
        sort: 'L',
        lastMessage: '今晚一起看电影吗',
        lastMessageTime: 1655114917370,
        lastMessageStatus: 'success',
        unread: 0
    },
    {
        id: 8,
        nickname: '米线',
        avatar: '米线',
        sort: 'M',
        lastMessage: '文件已经发给你了',
        lastMessageTime: 1655114917370,
        lastMessageStatus: 'success',
        unread: 2
    },
    {
        id: 66,
        nickname: '陈翔六点半',
        avatar: '群聊',
        sort: '',
        lastMessage: '文件已经发给你了',
        lastMessageTime: 1655114917370,
        lastMessageStatus: 'success',
        unread: 2,
        group: true
    },
    {
        id: 4,
        nickname: '我的名字很长很长很长很长',
        avatar: '很长',
        sort: 'H',
        lastMessage: '我的内容很长很长很长很长',
        lastMessageStatus: 'success',
        lastMessageTime: 1655114917370,
        unread: 6
    },
    {
        id: 5,
        nickname: '张三',
        avatar: '张三',
        sort: 'Z',
        lastMessage: '',
        lastMessageTime: 1655114917370,
        lastMessageStatus: 'success',
        unread: 0
    },
]
const msg = [
    '您好，几点下班',
    '九点半',
    '提醒您衣物洗护好了',
    '好的，周一取',
    '好的，周一取',
    '我是您的专属服务管家, 随时为您服务~',
    '好的',
    '周六可以看',
    '价格我去帮您谈',
    '价格还能谈',
]
export const messages = (count: number) => {
    const arr = []
    for(let i = count; i < count + 10; i++) {
        arr.push({
            id: i,
            time: new Date().getTime(),
            type: 'text',
            status: 'success',
            content: msg[i] ? msg [i] : i,
            toContactId: i % 2 === 0 ? '66' : i,
            from: {
                id: i % 2 === 0 ? '66' : i,
                nickname: i % 2 === 0 ? '陈翔' : '茅台',
                avatar: i % 2 === 0 ? '陈翔' : '茅台',
            }
        })
    }
    return arr
}