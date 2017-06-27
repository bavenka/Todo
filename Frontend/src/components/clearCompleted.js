import React from 'react';
import PropTypes from 'prop-types'

const ClearCompleted = ({count, OnClearCompletedClick}) => {
    if (count > 0) {
        return <input type="button" onClick={OnClearCompletedClick} value='Clear Completed'/>
    }
    return null;
};

ClearCompleted.propTypes = {
    count: PropTypes.number.isRequired,
    OnClearCompletedClick: PropTypes.func.isRequired
};

export default ClearCompleted