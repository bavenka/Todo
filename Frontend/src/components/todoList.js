import React from 'react';
import Todo from './todo';

const TodoList = ({todos, onDeleteClick, onCompleteClick}) => (
    <ul>
        {todos.map((todo) =>
            <Todo key={todo.id}
                  {...todo}
                  onDeleteClick={() => onDeleteClick(todo.id)
                  }
                  onCompleteClick={() => onCompleteClick(todo.id)
                  }
            />
        )}
    </ul>
);

export default TodoList