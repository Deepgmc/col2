export const timestampToString = (time) => {
    if(!time) return 'No time'
    let d = new Date(time * 1000),
        day = d.getDate(),
        month = d.getMonth() + 1,
        year = d.getFullYear()
    return (day < 10 ? '0' + day.toString() : day)
        + '.' +
        (month < 10 ? '0' + month.toString() : month)
        + '.' +
        (year)
}