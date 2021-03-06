import {GET_INIT_DATA, SET_NEW_DAY} from '../../libs/constants';

export default store => next => action => {
    const {type} = action
    if(type === SET_NEW_DAY){
        fetch('/api/set-new-day', {
                method: 'PATCH'
            })
            .then(res => res.json())
            .then((response_data) => {
                next({...action, response_data})
            })
            .catch(err => dispatch({
                type: GET_INIT_DATA
            }))
    } else {
        next({...action})
    }

}