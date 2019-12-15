import React from 'react'
import PropTypes from 'prop-types'
import Cell from './Cell'
import {FIELDS_X , FIELDS_Y} from '../../libs/constants'

class Fields extends React.Component {
    static propTypes = {
        fields: PropTypes.array
    }

    render() {

        const {fields} = this.props
        console.log('Fields.j: Fields Array', fields);

        let content = null

        if(fields.length === FIELDS_X * FIELDS_Y){
            content = fields.map((cell, index) => {
                const this_cell = cell[0]
                //первая цифра ([0]) - линия (y), вторая цифра([1]) - столбец в линии (x)
                const x = this_cell.coordinates[1],
                     y = this_cell.coordinates[0]
                return <Cell key={String(x) + '-' + String(y)} cell={this_cell} />
            })
        } else {
            content = 'Неверный размер поля'
        }
        return (
            <div className="cells__cnt">
                {content}
            </div>
        )
    }
}

export default Fields