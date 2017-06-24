import React from 'react'

const countTodos = (todos) => {
    return todos.reduce((count, todo) =>
        todo.completed ? count + 1 : count, 0);
};

let count;

const Counter = ({todos}) => (
    <strong>
        {count = countTodos(todos)}
        {' '}
        { count === 1 ? 'item' : 'items'}
        {' left'}
    </strong>
);

export default Counter
