import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class ColonyContainer extends React.Component{
    static propTypes = {
        user: PropTypes.object
    }

    constructor(props) {
        super(props)
    }

    render(){
        return <div>
            colony main container cnt
        </div>
    }
}

ReactDOM.render(<ColonyContainer />, document.getElementById('colony_main_cnt'))