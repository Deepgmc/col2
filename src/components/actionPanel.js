import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {SET_NEW_DAY} from '../../libs/constants'

class ActionPanel extends React.Component{

    static propTypes = {
        isActive: PropTypes.bool
    }
    render() {
        const {isActive} = this.props
        let content = null

        if(isActive)
            content = <button className="btn btn-success" onClick={this.handleNextDayButtonClick}>Next day</button>

        return (
            <div>
                {content}
            </div>
        )
    }


    handleNextDayButtonClick = () => {
        this.props.dispatch({
            type: SET_NEW_DAY
        })
    }
}
function mapStateToProps(store){
    return {
        isActive: !!store.game.date.currentDate
    }
}
const decorator = connect(mapStateToProps)

export default decorator(ActionPanel)