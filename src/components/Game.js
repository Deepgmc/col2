import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import ActionPanel from './actionPanel'
import ResourcePanel from './resourcePanel';
import InfoPanel from './InfoPanel';
import Fields from './Fields';

class Game extends React.Component {
    static propTypes = {
        fields      : PropTypes.array,
        currentDate : PropTypes.number,
        resources   : PropTypes.object,
        clickedCell : PropTypes.object,
        gc          : PropTypes.object,
        edifices    : PropTypes.object
    }

    render() {
        const {fields, currentDate, resources, clickedCell, gc, edifices} = this.props
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
                        <Fields
                            fields={fields}
                            clickedCell={clickedCell}
                            gc={gc}
                            edifices={edifices}
                        />
                    </div>
                    <div className="col-md-4 g__actions_cnt">
                        <ActionPanel
                            isActive={true}
                            currentDate={currentDate}
                            edifices={edifices}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 g_info_cnt">
                        <InfoPanel />
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    (store) => { //запихнем кусок стора в пропсы текущего компонента
        return {
            fields          : store.game.fields,
            resources       : store.game.resources,
            currentDate     : store.game.currentDate,
            clickedCell     : store.game.clickedCell,
            gc              : store.game.gc,
            edifices        : store.game.edifices
        }
    },
    {//экшн креэйторы запихнем в коннекст, они будут доступны в props

    }
)(Game)