import React from 'react'

const Counter = ({countUnfinishedTodos}) => (
    <strong>
        {countUnfinishedTodos}
        {' '}
        { countUnfinishedTodos === 1 ? 'item' : 'items'}
        {' left'}
    </strong>
);

export default Counter
