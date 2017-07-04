import React, {PropTypes} from 'react'
import classnames from 'classnames'

const FlashMessage = ({id, messageType, text, deleteFlashMessage}) => (
    <div className={classnames('alert', {
        'alert-success': messageType === 'success',
        'alert-info': messageType === 'info',
        'alert-warning': messageType === 'warning',
        'alert-danger': messageType === 'danger'
    })}>
        <button className="close" onClick={deleteFlashMessage}><span>&times;</span></button>
        <strong>{text}</strong>
    </div>
);

FlashMessage.propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    messageType: PropTypes.string.isRequired,
    deleteFlashMessage: PropTypes.func.isRequired
};

export default FlashMessage;