import {SET_NEW_DAY, GET_INIT_DATA, CELL_CLICK} from '../../libs/constants'

export const new_day_action = () => {
    return {
        type: SET_NEW_DAY
    }
}

export function get_init_data(){
    return (dispatch) => {
        fetch('/api/get-init-data', {method: 'GET'})
            .then(res => res.json())
            .then(response_data => dispatch({
                type: GET_INIT_DATA,
                response_data: response_data
            }))
            .catch(err => dispatch({
                type: GET_INIT_DATA
            }))
    }
}

export function cell_click(cell){
    return (dispatch) => {
        dispatch({
            type: CELL_CLICK,
            payload: {
                cell: cell
            }
        })
    }
}