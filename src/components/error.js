import React from 'react'
import PropTypes from 'prop-types'

Error.propTypes = {
    message: PropTypes.string,
    isErr: PropTypes.bool
}

function Error(props) {

    const {message, isErr} = props

    let alertClass = 'alert mt-2 '
    alertClass += (isErr ? 'alert-danger' : 'alert-success')

    return (
        <div>
            <div className={alertClass} role="alert">
                {message}
            </div>
        </div>
    )
}

export default Error