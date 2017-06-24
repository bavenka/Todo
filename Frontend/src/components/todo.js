import React from 'react';

const Todo = ({text, onDeleteClick, onCompleteClick, completed}) => (
    <li style={{textDecoration: completed ? 'line-through' : 'none'}}>
        <input type="checkbox" checked={completed} onClick={onCompleteClick}/>
        {text}
        <button onClick={onDeleteClick}>x</button>
    </li>
);

export default Todo