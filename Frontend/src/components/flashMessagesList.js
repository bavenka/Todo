import React, {PropTypes} from 'react';
import {connect} from 'react-redux'
import FlashMessage from './flashMessage'

const FlashMessagesList = ({flashMessages}) => (
    <div>
        {flashMessages.map((flashMessage) =>
            <FlashMessage key={flashMessage.id}
                          {...flashMessage}
            />
        )}
    </div>
);

FlashMessagesList.propTypes = {
    flashMessages: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
    return {
        flashMessages: state.flashMessages
    }
};

export default connect(mapStateToProps)(FlashMessagesList);