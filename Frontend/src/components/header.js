import React from 'react';
import {connect} from 'react-redux';
import addTodo from '../actions/addTodo'
import CompleteAll from '../containers/completeAll'

let Header = ({dispatch}) => {

    let textInput = null;

    function handleNewTodoKeyDown(event) {
        if (event.keyCode !== 13) {
            return;
        }
        event.preventDefault();

        if (textInput === null || !textInput.value.trim()) {
            return;
        }

        dispatch(addTodo(textInput.value));
        textInput.value = '';
    }

    return (
        <div>
            <CompleteAll/>
            <input ref={node => {
                textInput = node;
                node.focus()
            }} onKeyDown={handleNewTodoKeyDown}/>
        </div>
    )
};

Header = connect()(Header);

export default Header