import React from 'react'
import PropTypes from 'prop-types'

Success.propTypes = {
    message: PropTypes.string
}

function Success(props) {

    const {message} = props

    return (
        <div>
            <div className="alert alert-success mt-2" role="alert">
                {message}
            </div>
        </div>
    )
}

export default Success