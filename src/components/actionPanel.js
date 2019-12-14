import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {new_day_action} from '../actions'

class ActionPanel extends React.Component{

    static propTypes = {
        currentDate: PropTypes.number,
        new_day_action: PropTypes.func.isRequired
    }

    render() {
        const {currentDate} = this.props
        let content = null

        if(!!currentDate)
            content = <button className="btn btn-sm btn-light" onClick={this.handleNextDayButtonClick}>Следующий день</button>

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
    /*(store) => { //запихнем кусок стора в пропсы текущего компонента
        return {
            currentDate: store.game.currentDate
        }
    },*/
    null,
    {//экшн креэйторы запихнем в коннекст, они будут доступны в props
        new_day_action
    }
)(ActionPanel)