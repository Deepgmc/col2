import React from 'react'
import PropTypes from 'prop-types'

class Cell extends React.Component {
    static propTypes = {
        cell: PropTypes.object
    }

    render() {
        const {cell} = this.props
        const x = cell.coordinates[1],
              y = cell.coordinates[0]
        const edifice = cell.edifice
        const coordinates = `${x}-${y}`

        let edificeName = 'No edifice',
            edificeDescription = 'No description'

        if(edifice){
            edificeName = edifice.edifice.name
            edificeDescription = edifice.edifice.description
        }

        return (
            <div className="fields__cell">
                <div>{coordinates}</div>
                <div>{edificeName}</div>
                <div>{edificeDescription}</div>
            </div>
        )
    }
}

export default Cell