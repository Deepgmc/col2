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
            <div className="fields__cell" onClick={this.handleCellClick}>
                <div>{coordinates}</div>
                <div>{edificeName}</div>
            </div>
        )
    }

    handleCellClick = () => {
        /*
        * Добавить обработку клика -
        * должен посылаться экшен, который обновит текущий компонент (добавит рамку вокруг выбранной ячейки
        * затем, должна появиться инфа о выбранном здании в панели инфо снизу игровой области
        * Надо определить - передавать объект выбранного здания через экшн payload
        * или подхватывать где нужно массив всех зданий и находить нужное там, на месте
        * */
        console.log('Click to cell');
    }
}

export default Cell