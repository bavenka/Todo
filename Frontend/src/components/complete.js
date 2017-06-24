import React from 'react';

const Complete = ({completed, onCompleteClick}) => (
        <input type="checkbox" checked={completed} onClick={onCompleteClick}/>
);

export default Complete