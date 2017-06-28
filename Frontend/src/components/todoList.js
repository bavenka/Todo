import React from 'react';
import Todo from './todo';

class TodoList extends React.Component {

    render() {
        console.log(this.params);
        return (
            <ul>
                {this.props.todos.map((todo) =>
                    <Todo key={todo.id}
                          {...todo}
                          onDeleteClick={() => this.props.onDeleteClick(todo.id)
                          }
                          onCompleteClick={() => this.props.onCompleteClick(todo.id)
                          }
                          onEditClick={(id, text) => this.props.onEditClick(todo.id, text)
                          }
                    />
                )}
            </ul>)
    }
}

export default TodoList