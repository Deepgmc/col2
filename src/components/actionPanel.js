import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {new_day_action} from '../actions'

class ActionPanel extends React.Component{

    static propTypes = {
        isActive: PropTypes.bool,
        new_day_action: PropTypes.func.isRequired
    }
    render() {
        console.log('action panel update');
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
        this.props.new_day_action()
    }
}

export default connect(
    (store) => { //запихнем кусок стора в пропсы текущего компонента
        return {
            isActive: !!store.game.date.currentDate
        }
    },
    {//экшн креэйторы запихнем в коннекст, они будут доступны в props
        new_day_action
    }
)(ActionPanel)