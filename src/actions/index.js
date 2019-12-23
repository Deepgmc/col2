import {SET_NEW_DAY, GET_INIT_DATA} from '../../libs/constants'

export const new_day_action = () => {
    return {
        type: SET_NEW_DAY
    }
}

/*export const get_init_data = () => {
    return {
        type: GET_INIT_DATA
    }
}*/

export function get_init_data(){
    return (dispatch) => {
        type: GET_INIT_DATA
    }

    fetch('/api/get-init-data', {method: 'GET'})
        .then(res => res.json())
        .then((response_data) => {
            next({...action, response_data})
        })
}