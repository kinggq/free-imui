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

export const defaultContacts = [
    {
        id: '1',
        nickname: '猪小明',
        avatar: '猪小明',
        sort: 'Z',
        lastMessage: '今天几点下班？哈哈哈哈哈哈哈',
        lastMessageTime: 1655114917359,
        unread: 0
    },
    {
        id: 2,
        nickname: '茅台',
        avatar: '茅台',
        sort: 'M',
        lastMessage: '晚一点',
        lastMessageTime: 1655114917370,
        unread: 0
    },
    {
        id: 3,
        nickname: '冷檬',
        avatar: '冷檬',
        sort: 'L',
        lastMessage: '今晚一起看电影吗',
        lastMessageTime: 1655114917370,
        unread: 0
    },
    {
        id: 8,
        nickname: '米线',
        avatar: '米线',
        sort: 'M',
        lastMessage: '文件已经发给你了',
        lastMessageTime: 1655114917370,
        unread: 2
    },
    {
        id: 66,
        nickname: '陈翔六点半',
        avatar: '群聊',
        sort: '',
        lastMessage: '文件已经发给你了',
        lastMessageTime: 1655114917370,
        unread: 2,
        group: true
    },
    {
        id: 4,
        nickname: '我的名字很长很长很长很长',
        avatar: '很长',
        sort: 'H',
        lastMessage: '我的内容很长很长很长很长',
        lastMessageTime: 1655114917370,
        unread: 2
    },
    {
        id: 5,
        nickname: '张三',
        avatar: '张三',
        sort: 'Z',
        lastMessage: '',
        lastMessageTime: 1655114917370,
        unread: 0
    },
]