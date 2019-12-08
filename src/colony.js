import React from 'react'
import ReactDOM from 'react-dom'

import App from './app'
import store from './store'
import {Provider} from 'react-redux'




class ColonyContainer extends React.Component{

    render(){
        console.log('%c APP RENDER', 'background: green; color: blue;')
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}

ReactDOM.render(<ColonyContainer />, document.getElementById('colony_main_cnt'))