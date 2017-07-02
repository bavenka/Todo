import React, {PropTypes} from 'react';
import Complete from './complete'
import TodoTextInput from "./todoTextInput";

class Todo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {editing: false};
        this.onDoubleClick = this.onDoubleClick.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    onDoubleClick() {
        this.setState({editing: true})
    }

    onSave(id, text) {
        if (text.length === 0) {
            this.props.onDeleteClick(id);
        } else {
            this.props.onEditClick(id, text);
        }
        this.setState({editing: false})
    }

    render() {
        let element;

        if (this.state.editing) {
            element = (
                <TodoTextInput text={this.props.text}
                               editing={this.state.editing}
                               onSave={(text) => this.onSave(this.props.id, text)}/>
            )
        } else {
            element = (
                <div>
                    <Complete onCompleteClick={this.props.onCompleteClick} completed={this.props.completed}/>
                    <label onDoubleClick={this.onDoubleClick} style={{textDecoration: this.props.completed ? 'line-through' : 'none'}}>
                        {this.props.text}
                    </label>
                    <button onClick={this.props.onDeleteClick}>x</button>
                </div>
            )
        }


        return (
            <li>
                {element}
            </li>
        )
    }
}

Todo.propTypes = {
    id:PropTypes.number.isRequired,
    text:PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    onEditClick: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired,
    onCompleteAllClick: PropTypes.func,
    onCompleteClick: PropTypes.func.isRequired
};

export default Todo