import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import ActionPanel from './actionPanel'
import ResourcePanel from './resourcePanel';
import Fields from './Fields';

class Game extends React.Component {
    static propTypes = {
        fields: PropTypes.array,
        currentDate: PropTypes.number,
        resources: PropTypes.object
    }

    render() {
        const {fields, currentDate, resources} = this.props
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <ResourcePanel resources={resources} currentDate={currentDate} />
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-8 g__fields_cnt">
                        <Fields fields={fields}/>
                    </div>
                    <div className="col-md-4 g__actions_cnt">
                        <ActionPanel isActive={true} currentDate={currentDate}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    (store) => { //запихнем кусок стора в пропсы текущего компонента
        return {
            fields: store.game.fields,
            resources: store.game.resources,
            currentDate: store.game.currentDate
        }
    },
    {//экшн креэйторы запихнем в коннекст, они будут доступны в props

    }
)(Game)