import React from 'react'
import ReactDOM from 'react-dom'
import store from './store'
import {Provider} from 'react-redux'

import ActionPanel from './components/actionPanel'
import ResourcePanel from './components/resourcePanel'



class ColonyContainer extends React.Component{

    componentDidMount() {
        /**
         * Получаем начальные данные:
            - данные юзера, который залогинен
            - для этого юзера загружаем его игровое окружение из модели mongo game
         */
        /*fetch('/api/get-user-data', {method: 'GET'})
            .then((response) => {return response.json()})
            .then((user) => {
                this.setState({user: user})
            })*/
    }

    render(){
        console.log('%c Colony render', 'background: green; color: blue;')
        return (
            <Provider store={store}>
                <ResourcePanel />
                <ActionPanel isActive={true} />
            </Provider>
        )
    }
}

ReactDOM.render(<ColonyContainer />, document.getElementById('colony_main_cnt'))