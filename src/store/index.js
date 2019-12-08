import {createStore, applyMiddleware} from 'redux'
import reducers from '../reducers'
import getGameDataMW from '../middlewares/getGameData'

const middlewares = applyMiddleware(getGameDataMW)

const store = createStore(reducers, {}, middlewares)

export default store