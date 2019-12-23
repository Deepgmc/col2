import {GET_INIT_DATA} from '../../libs/constants';

/*
export default store => next => action => {
    const {type} = action
    if(type === GET_INIT_DATA){
        fetch('/api/get-init-data', {method: 'GET'})
            .then(res => res.json())
            .then((response_data) => {
                next({...action, response_data})
            })
    } else {
        next({...action})
    }
}*/
