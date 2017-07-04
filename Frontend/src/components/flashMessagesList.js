import React, {PropTypes} from 'react';
import {connect} from 'react-redux'
import FlashMessage from './flashMessage'
import deleteFlashMessage from '../actions/deleteFlashMessage'


const FlashMessagesList = ({flashMessages, deleteFlashMessage}) => (
    <div>
        {flashMessages.map((flashMessage) =>
            <FlashMessage key={flashMessage.id}
                          {...flashMessage}
                          deleteFlashMessage={() => deleteFlashMessage(flashMessage.id)}
            />
        )}
    </div>
);

FlashMessagesList.propTypes = {
    flashMessages: PropTypes.array.isRequired,
    deleteFlashMessage: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        flashMessages: state.flashMessages
    }
};

export default connect(mapStateToProps, {deleteFlashMessage})(FlashMessagesList);