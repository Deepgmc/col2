import React from 'react'
import {connect} from 'react-redux'

import Game from './components/Game'
import {get_init_data, cell_click} from './actions'

class App extends React.Component{
    componentDidMount() {
        this.props.get_init_data()
    }

    render(){
        return (
            <div>
                <Game />
            </div>
        )
    }
}

export default connect(
    (store) => { //запихнем кусок стора в пропсы текущего компонента
        return {
            game: store.game
        }
    },
    {//экшн креэйторы запихнем в коннекст, они будут доступны в props
        get_init_data
    }
)(App)