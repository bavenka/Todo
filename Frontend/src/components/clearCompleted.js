import React from 'react';


const ClearCompleted = ({count, OnClearCompletedClick}) => {

    function onClick() {
        event.preventDefault();
        OnClearCompletedClick();
    }

    if (count > 0) {
        return <input type="button" onClick={onClick} value='Clear Completed'/>
    }
    return null;
};

export default ClearCompleted