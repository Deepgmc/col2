import {createStore, applyMiddleware} from 'redux'
import reducers from '../reducers'
import getGameDataMW from '../middlewares/getGameData'
import saveGameDataMW from '../middlewares/saveGameData'

const middlewares = applyMiddleware(getGameDataMW, saveGameDataMW)

const store = createStore(reducers, {}, middlewares)

export default store