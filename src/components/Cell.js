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

        let edificeName = '-',
            edificeId = '',
            thisCName = 'fields__cell ' + cName

        if(edifice && edifices){
            edificeName = edifices[edifice.edifice].name
            edificeId = edifices[edifice.edifice].id
        }

        return (
            <div className={thisCName} onClick={this.handleCellClick}>
                <div>{coordinates}</div>
                <div>{edificeName}</div>
                <div>{edificeId}</div>
            </div>
        )
    }

    handleCellClick = () => {
        this.props.cell_click(this.props.cell)
    }
}

export default connect(
    null,
    {//экшн креэйторы запихнем в коннекст, они будут доступны в props
        cell_click
    }
)(Cell)