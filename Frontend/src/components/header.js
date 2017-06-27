import React from 'react';
import TodoTextInputContainer from '../containers/todoTextInput'
import CompleteAll from '../containers/completeAll'

const Header = () => {

    return (
        <div>
            <CompleteAll/>
            <TodoTextInputContainer/>
        </div>
    )
};

export default Header