import React from 'react'

const countUnfinishedTodos = (todos) => {
    return todos.reduce((count, todo) =>
        !todo.completed ? count + 1 : count, 0);
};

let count;

const Counter = ({todos}) => (
    <strong>
        {count = countUnfinishedTodos(todos)}
        {' '}
        { count === 1 ? 'item' : 'items'}
        {' left'}
    </strong>
);

export default Counter
