import React from 'react';
import Complete from './complete'
import TodoTextInput from "./todoTextInput";

class Todo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {editing: false};
        this.onDoubleClick=this.onDoubleClick.bind(this);
        this.onSave=this.onSave.bind(this);
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
                <TodoTextInput onSave={(text) => this.onSave(this.props.id, text)}/>
            )
        } else {
            element = (
                <div>
                    <Complete onCompleteClick={this.props.onCompleteClick} completed={this.props.completed}/>
                    <label onDoubleClick={this.onDoubleClick}>
                        {this.props.text}
                    </label>
                    <button onClick={this.props.onDeleteClick}>x</button>
                </div>
            )
        }


        return (
            <li style={{textDecoration: this.props.completed ? 'line-through' : 'none'}}>
                {element}
            </li>
        )
    }
}

export default Todo