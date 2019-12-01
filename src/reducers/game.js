import {SET_NEW_DAY} from '../../libs/constants'
export default (game = {//каждый редьюсер получает часть стора, не зная ничего о других частях
    date: {
        currentDate: 1577863800 // 01.01.2020 - дефолтное значение для нового юзера
    }
}, action) => {
    const {type} = action



    switch (type) {
        case SET_NEW_DAY:
            const {date} = game
            return {
                date: {
                    currentDate: parseInt(date.currentDate) + (3600 * 24)
                }
            }
            break
        default:
            return game
    }
    return game
}