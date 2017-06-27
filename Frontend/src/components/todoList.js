import React from 'react';
import Todo from './todo';

class TodoList extends React.Component {

    render() {
        return (
            <ul>
                {this.props.todos.map((todo) =>
                    <Todo key={todo.id}
                          {...todo}
                          onDeleteClick={() => this.props.onDeleteClick(todo.id)
                          }
                          onCompleteClick={() => this.props.onCompleteClick(todo.id)
                          }
                    />
                )}
            </ul>)
    }
}

export default TodoList