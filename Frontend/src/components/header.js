import React from 'react';
import TodoTextInput from '../components/todoTextInput'
class Header extends React.Component {

    render() {
        return (
            <header>
                <h1>Todos</h1>
                <TodoTextInput onSave={(text) => this.props.onAddClick(text)}
                               placeholder="What needs to be done?" />
            </header>
        )
    }
}

export default Header