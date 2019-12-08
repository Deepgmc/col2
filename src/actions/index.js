import {SET_NEW_DAY, GET_INIT_DATA} from '../../libs/constants'

export const new_day_action = () => {
    return {
        type: SET_NEW_DAY
    }
}

export const get_init_data = () => {
    return {
        type: GET_INIT_DATA
    }
}