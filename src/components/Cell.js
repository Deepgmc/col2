import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {cell_click} from '../actions'

class Cell extends React.Component {
    static propTypes = {
        cell        : PropTypes.object,
        gc          : PropTypes.object,
        id          : PropTypes.string, //id состоит из координат
        cName       : PropTypes.string //нажата ли ячейка
    }

    render() {
        const {cell, cName, edifices} = this.props
        const edifice = cell.edifice
        const coordinates = `${cell.coordinates[1]}-${cell.coordinates[0]}`

        let edificeName = 'No edifice',
            thisCName = 'fields__cell ' + cName

        if(edifice && edifices){
            edificeName = edifices[edifice.edifice].name
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