export default store => next => action => {
    const {url} = action
    if(!url) return next(action)
    fetch(url, {method: 'GET'})
        .then(res => res.json())
        .then((response_data) => {
            next({...action, response_data})
        })
}