import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {cell_click} from '../actions'

class Cell extends React.Component {
    static propTypes = {
        cell: PropTypes.object,
        id: PropTypes.string, //id состоит из координат
        cName: PropTypes.string //нажата ли ячейка
    }

    render() {
        const {cell, cName} = this.props
        const x = cell.coordinates[1],
              y = cell.coordinates[0]
        const edifice = cell.edifice
        const coordinates = `${x}-${y}`

        let edificeName = 'No edifice',
            thisCName = 'fields__cell ' + cName

        if(edifice){
            edificeName = edifice.edifice.name
        }

        return (
            <div className={thisCName} onClick={this.handleCellClick}>
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
        this.props.cell_click(this.props.cell)
    }
}

export default connect(
    null,
    {//экшн креэйторы запихнем в коннекст, они будут доступны в props
        cell_click
    }
)(Cell)