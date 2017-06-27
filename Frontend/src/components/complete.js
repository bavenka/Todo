import React from 'react';

const Complete = ({completed, onCompleteClick}) => (
    <input type="checkbox" checked={completed} onChange={onCompleteClick}/>
);

export default Complete