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

export function formatTime(value: number) {
    const date = new Date(value)
    const nDate = new Date()

    const getFullYear = (t: Date) => t.getFullYear()
    const getMD = (t: Date) => `${t.getMonth() + 1}-${t.getDay()}`

    const dateYear = getFullYear(date)
    const nDateYear = getFullYear(nDate)

    let f
    if (dateYear !== nDateYear) {
        f = 'Y年M月D日 h:m'
    } else if (`${dateYear}-${getMD(date)}` === `${nDateYear}-${getMD(nDate)}`) {
        f = 'h:m'
    } else {
        f = 'M月D日 h:m'
    }
    return formatDate(value, f)
}

export function formatDate(t: number | Date, f: string) {
    if (!f) f = 'Y-M-D h:m:s'
    if (t) {
        t = new Date(t)
    } else {
        t = new Date()
    }

    const arr = [
        t.getFullYear().toString(),
        addZero(t.getMonth() + 1),
        addZero(t.getDate()),
        addZero(t.getHours()),
        addZero(t.getMinutes()),
        addZero(t.getSeconds())
    ]
    const fs = 'YMDhms'

    for (let i = 0; i < arr.length; i++) {
        f =  f.replace(fs.charAt(i), arr[i])
    }
    return f
}

export function addZero(v: number) {
    return v < 10 ? `0${v}` : v.toString()
}
