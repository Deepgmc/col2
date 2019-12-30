import {createStore, applyMiddleware} from 'redux'
import reducers from '../reducers'
import saveGameDataMW from '../middlewares/saveGameDataMW'
import thunk from 'redux-thunk'

const middlewares = applyMiddleware(thunk, saveGameDataMW)

const store = createStore(reducers, {}, middlewares)

window.store = store

export default store