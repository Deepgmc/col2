import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {new_day_action} from '../actions'

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
        this.props.new_day_action()
    }
}
function mapStateToProps(store){//запихнем кусок стора в пропсы текущего компонента
    return {
        isActive: !!store.game.date.currentDate
    }
}

const mapToDispatch = {//экшн креэйторы запихнем в коннекст, они будут доступны в props
    new_day_action: new_day_action
}

const decorator = connect(mapStateToProps, mapToDispatch)

export default decorator(ActionPanel)