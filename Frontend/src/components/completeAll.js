import React from 'react';

const CompleteAll = ({check, onCompleteAllClick}) => (
    <input type="checkbox" checked={check} onChange={onCompleteAllClick}/>
);

export default CompleteAll