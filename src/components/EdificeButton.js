import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {edifice_button_click} from '../actions'

class EdificeButton extends React.Component {
    static propTypes = {
        edifice   : PropTypes.object
    }

    render() {

        const edifice = this.props.edifice

        return (
            <div className="action_btn__edifice" onClick={this.handleEBClick}>
                <div>{edifice.id}</div>
                <div>{edifice.name}</div>
            </div>
        )
    }

    handleEBClick = () => {
        this.props.edifice_button_click(this.props.edifice)
    }
}

export default connect(
    null,
    {//экшн креэйторы запихнем в коннекст, они будут доступны в props
        edifice_button_click
    }
)(EdificeButton)