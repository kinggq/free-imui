export const formatDay = (time: number) => {
    const date = new Date(time)
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()
    return year + '/' + month + '/' + day
}

export const guid = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}