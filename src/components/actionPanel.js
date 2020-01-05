import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {new_day_action} from '../actions'

import EdificeButton from './EdificeButton'

class ActionPanel extends React.Component{

    static propTypes = {
        currentDate     : PropTypes.number,
        new_day_action  : PropTypes.func.isRequired,
        edifices        : PropTypes.object
    }

    render() {
        const {currentDate, edifices} = this.props
        let nextDayBtncontent, edificesContent = null
        let edificesButtons = []

        if(!!currentDate)
            nextDayBtncontent = <button className="btn btn-sm btn-light" onClick={this.handleNextDayButtonClick}>Следующий день</button>

        if(edifices){
            for(let edifice_name in edifices){
                edificesButtons.push(edifices[edifice_name])
            }
            edificesContent = edificesButtons.map((edifice) => {
                return <EdificeButton
                    key={edifice.id}
                    edifice={edifice}
                />
            })
        }


        return (
            <div>
                {nextDayBtncontent}
                {edificesContent}
            </div>
        )
    }


    handleNextDayButtonClick = () => {
        this.props.new_day_action()
    }
}

export default connect(
    null,
    {//экшн креэйторы запихнем в коннекст, они будут доступны в props
        new_day_action
    }
)(ActionPanel)