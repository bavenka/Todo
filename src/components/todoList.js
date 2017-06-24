import React from 'react';
import Todo from './todo';

const TodoList = ({todos, onDeleteClick}) => (
  <ul>
    {todos.map((todo) =>
      <Todo key={todo.id}
        {...todo}
        onClick={() => onDeleteClick(todo.id)}
        />
    )}
  </ul>
)
export default TodoList