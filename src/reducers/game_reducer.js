import {SET_NEW_DAY, GET_INIT_DATA} from '../../libs/constants'
export default (game = {
    currentDate: null,
    fields: []
}, action) => {
    const {type, response_data} = action

    switch (type) {
        case SET_NEW_DAY:
            return response_data
        case GET_INIT_DATA:
            return response_data
    }
    return game
}