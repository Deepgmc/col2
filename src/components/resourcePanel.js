import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import {timestampToString} from '../../helpers/timestampToString'

class ResourcePanel extends React.Component {
    static propTypes = {
        date: PropTypes.number
    }

    render() {
        console.log('Render resource panel');
        let {date} = this.props
        date = timestampToString(date)
        return (
            <div>
                Today: {date}
            </div>
        )
    }
}

function mapStateToProps(store){
    return {
        date: store.game.date.currentDate
    }
}

const decorator = connect(mapStateToProps)

export default decorator(ResourcePanel)