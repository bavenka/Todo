import React from 'react';

const ClearCompleted = ({count, OnClearCompletedClick}) => {
    if (count > 0) {
        return <input type="button" onClick={OnClearCompletedClick} value='Clear Completed'/>
    }
    return null;
};

export default ClearCompleted