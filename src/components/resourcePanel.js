import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import {timestampToString} from '../../helpers/timestampToString'

class ResourcePanel extends React.Component {
    static propTypes = {
        currentDate: PropTypes.number,
        resources: PropTypes.object
    }

    render() {
        if(!this.props.currentDate) return null
        let {currentDate} = this.props
        const {resources} = this.props
        currentDate = timestampToString(currentDate)
        return (
            <div className="d-flex pt-4 rp__resources_cnt">
                <div><b>Сегодня:</b> {currentDate}</div>
                <div className="ml-2">
                    <span className="ml-1"><b>Воздух:</b> {resources.oxygen}</span>
                    <span className="ml-1"><b>Вода:</b> {resources.water}</span>
                    <span className="ml-1"><b>Еда:</b> {resources.food}</span>
                </div>
            </div>
        )
    }
}

/*function mapStateToProps(store){
    return {

    }
}

const decorator = connect(mapStateToProps)
export default decorator(ResourcePanel)*/

export default ResourcePanel