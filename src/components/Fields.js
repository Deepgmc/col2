import React from 'react'
import PropTypes from 'prop-types'
import Cell from './Cell'

class Fields extends React.Component {
    static propTypes = {
        fields      : PropTypes.array,
        clickedCell : PropTypes.object,
        gc          : PropTypes.object,
        edifices    : PropTypes.object
    }

    render() {
        const {fields, clickedCell, gc, edifices} = this.props
        let content, cName
        if(gc){
            if(fields.length === gc.FIELDS_X * gc.FIELDS_Y){
                content = fields.map((cell) => {
                    cName = ''
                    const this_cell = cell[0]
                    let clickedCellId = null
                    if(clickedCell && clickedCell.id){
                        clickedCellId = clickedCell.id
                    }

                    if(this_cell.id === clickedCellId) cName = 'fields__cell_clicked'
                    return <Cell
                        key={this_cell.id}
                        id={this_cell.id}
                        cell={this_cell}
                        cName={cName}
                        edifices={edifices}
                    />
                })
            } else {
                content = 'Неверный размер поля'
            }
        } else {
            content = null
        }

        return (
            <div className="cells__cnt d-flex flex-wrap">
                {content}
            </div>
        )
    }
}

export default Fields