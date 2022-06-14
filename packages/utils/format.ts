export const formatDay = (time: number) => {
    const date = new Date(time)
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()
    return year + '/' + month + '/' + day
}