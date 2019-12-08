import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import {timestampToString} from '../../helpers/timestampToString'

class ResourcePanel extends React.Component {
    static propTypes = {
        currentDate: PropTypes.number
    }

    render() {
        console.log('Resource panel render');
        if(!this.props.currentDate) return null
        let {currentDate} = this.props
        currentDate = timestampToString(currentDate)
        return (
            <div>
                Сегодня: {currentDate}
            </div>
        )
    }
}

function mapStateToProps(store){
    return {
        currentDate: store.game.currentDate
    }
}

const decorator = connect(mapStateToProps)

export default decorator(ResourcePanel)