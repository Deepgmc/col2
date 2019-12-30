import {SET_NEW_DAY, GET_INIT_DATA, CELL_CLICK} from '../../libs/constants'
export default (game = {
    currentDate: null,
    fields: [],
    clickedCell: {}
}, action) => {
    const {type, response_data, payload} = action

    switch (type) {
        case SET_NEW_DAY:
            return {...response_data, clickedCell: {}}
        case GET_INIT_DATA:
            return {...response_data, clickedCell: {}}
        case CELL_CLICK:
            return {...game, clickedCell: payload.cell}
    }
    return game
}