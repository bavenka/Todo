import React from 'react';
import Complete from './complete'

class Todo extends React.Component {

     render() {

        return (
            <li style={{textDecoration: this.props.completed ? 'line-through' : 'none'}}>
                <Complete onCompleteClick={this.props.onCompleteClick} completed={this.props.completed}/>
                {this.props.text}
                <button onClick={this.props.onDeleteClick}>x</button>
            </li>
        )
    }
}

export default Todo