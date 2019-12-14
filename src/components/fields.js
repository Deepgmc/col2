import React from 'react'
import PropTypes from 'prop-types'

class Fields extends React.Component {
    static propTypes = {
        fields: PropTypes.array
    }

    render() {

        console.log('Fields render');
        const {fields} = this.props

        let content = null

        if(fields.length === 25){
            content = fields.map((cell, index) => {
                //первая цифра ([0]) - линия (y), вторая цифра([1]) - столбец в линии (x)
                const x = cell[0].coordinates[1],
                    y = cell[0].coordinates[0]
                return (
                    <div className="fields__cell" key={String(x) + '-' + String(y)}>{x}-{y}</div>
                )
            })
        }

        return (
            <div className="cells__cnt">
                {content}
            </div>
        )
    }
}

export default Fields