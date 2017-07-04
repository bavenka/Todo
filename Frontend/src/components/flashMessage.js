import React, {PropTypes} from 'react'
import classnames from 'classnames'

const FlashMessage = ({id, messageType, text}) => (
    <div className={classnames('alert', {
        'alert-success': messageType === 'success',
        'alert-info': messageType === 'info',
        'alert-warning': messageType === 'warning',
        'alert-danger': messageType === 'danger'
    })}>
        {text}
    </div>
);

FlashMessage.propTypes = {};

export default FlashMessage;