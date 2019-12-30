import React from 'react'
import PropTypes from 'prop-types'
import Cell from './Cell'
import {FIELDS_X , FIELDS_Y} from '../../libs/constants'

class Fields extends React.Component {
    static propTypes = {
        fields: PropTypes.array,
        clickedCell: PropTypes.object
    }

    render() {
        const {fields, clickedCell} = this.props
        let content, cName

        if(fields.length === FIELDS_X * FIELDS_Y){
            content = fields.map((cell, index) => {
                cName = ''
                const this_cell = cell[0]
                //первая цифра ([0]) - линия(y), вторая цифра([1]) - столбец в линии(x)
                const x = this_cell.coordinates[1],
                     y = this_cell.coordinates[0],
                    id = String(x) + '-' + String(y)
                let clickedCellId = null
                if(clickedCell && clickedCell.coordinates){
                    clickedCellId = String(clickedCell.coordinates[1]) + '-' + String(clickedCell.coordinates[0])
                }

                if(id === clickedCellId) cName = 'fields__cell_clicked'
                return <Cell key={id} id={id} cell={this_cell} cName={cName} />
            })
        } else {
            content = 'Неверный размер поля'
        }
        return (
            <div className="cells__cnt d-flex flex-wrap">
                {content}
            </div>
        )
    }
}

export default Fields