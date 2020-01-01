import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

class InfoPanel extends React.Component{

    static propTypes = {
        clickedCell     : PropTypes.object,
        edifices        : PropTypes.object,
    }

    render() {
        const {clickedCell, edifices} = this.props
        let content = null

        if(clickedCell && clickedCell.edifice && edifices)
            content =
                <div>
                    <div>
                        {edifices[clickedCell.edifice.edifice].name}
                    </div>
                    <div>
                        {edifices[clickedCell.edifice.edifice].description}
                    </div>
                </div>

        return (
            <div>
                {content}
            </div>
        )
    }
}

export default connect(
    (store) => { //запихнем кусок стора в пропсы текущего компонента
        return {
            clickedCell     : store.game.clickedCell,
            edifices        : store.game.edifices
        }
    },
    {//экшн креэйторы запихнем в коннекст, они будут доступны в props

    }
)(InfoPanel)