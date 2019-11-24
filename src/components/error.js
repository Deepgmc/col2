import React from 'react'
import PropTypes from 'prop-types'

Error.propTypes = {
    message: PropTypes.string
}

function Error(props) {

    const {message} = props

    return (
        <div>
            <div className="alert alert-danger mt-2" role="alert">
                {message}
            </div>
        </div>
    )
}

export default Error