import React from 'react';
import Complete from './complete'

const Todo = ({text, onDeleteClick, onCompleteClick, completed}) => (
    <li style={{textDecoration: completed ? 'line-through' : 'none'}}>
        <Complete onCompleteClick={onCompleteClick} completed={completed}/>
        {text}
        <button onClick={onDeleteClick}>x</button>
    </li>
);

export default Todo