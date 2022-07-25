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

export function formatByte(value: number) {
    if (!value) {
      return '0 Bytes'
    }
    const unitArr = ['B', 'K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y']
    let index = 0;
    index = Math.floor(Math.log(value) / Math.log(1024))
    let size = value / Math.pow(1024, index)
    size = parseFloat(size.toFixed(2))
    return size + unitArr[index]
}