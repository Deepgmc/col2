import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

class InfoPanel extends React.Component{

    static propTypes = {
        clickedCell: PropTypes.object,
    }

    render() {
        const {clickedCell} = this.props
        let content = null

        if(clickedCell && clickedCell.edifice)
            content =
                <div>
                    <div>
                        {clickedCell.edifice.edifice.name}
                    </div>
                    <div>
                        {clickedCell.edifice.edifice.description}
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
            clickedCell: store.game.clickedCell
        }
    },
    {//экшн креэйторы запихнем в коннекст, они будут доступны в props
    }
)(InfoPanel)