import React from 'react';
import deleteTodo from '../actions/deleteTodo';
import {connect} from 'react-redux';

const Todo = ({text, onClick}) => (
    <li>
        {text}
        <button onClick={onClick}>x</button>
    </li>
);

export default Todo