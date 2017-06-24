import React from 'react';

const CompleteAll = ({check, onCompleteAllClick}) => (
    <input type="checkbox" checked={check} onClick={onCompleteAllClick}/>
);

export default CompleteAll