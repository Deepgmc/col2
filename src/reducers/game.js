import {SET_NEW_DAY, GET_INIT_DATA} from '../../libs/constants'
export default (game = {
    currentDate: null
}, action) => {
    const {type, response_data} = action

    switch (type) {
        case SET_NEW_DAY:
            const {currentDate} = game
            return {
                currentDate: parseInt(currentDate) + (3600 * 24)
            }
        case GET_INIT_DATA:
            return response_data
    }
    return game
}