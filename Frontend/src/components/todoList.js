import React, {PropTypes} from 'react';
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
                          onEditClick={(id, text) => this.props.onEditClick(todo.id, text)
                          }
                    />
                )}
            </ul>)
    }
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    onEditClick: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired,
    onCompleteClick: PropTypes.func.isRequired
};

export default TodoList