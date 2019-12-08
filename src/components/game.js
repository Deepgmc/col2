import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'


class Game extends React.Component {
    static propTypes = {
        game: PropTypes.object
    }



    render() {
        const {game} = this.props
        console.log('Game got game: ', game);
        return (
            <div>Game component render</div>
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

    }
)(Game)