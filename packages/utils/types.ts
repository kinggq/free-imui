export interface MenuType {
    key: string,
    title: string,
    unread: number,
    click: null,
    bottom: boolean,
    render: () => JSX.Element | HTMLElement
}