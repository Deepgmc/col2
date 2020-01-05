import {
    SET_NEW_DAY,
    GET_INIT_DATA,
    CELL_CLICK,
    EDIFICE_BUTTON_CLICK
} from '../../libs/constants'

export const new_day_action = () => {

    /***
     *
     * TODO ПЕРЕДЕЛАТЬ НА THUNK
     *
     * **/

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

export function edifice_button_click(edifice_button){
    console.log(edifice_button);
    return (dispatch) => {
        dispatch({
            type: EDIFICE_BUTTON_CLICK,
            payload: {
                edifice_button: edifice_button
            }
        })
    }
}