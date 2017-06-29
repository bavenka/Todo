import React, {PropTypes} from 'react';
import TodoTextInput from '../components/todoTextInput'
class Header extends React.Component {

    render() {
        console.log(this.props);
        return (
            <header>
                <h1>Todos</h1>
                <TodoTextInput onSave={(text) => this.props.onAddClick(text)}
                               placeholder="What needs to be done?" />
            </header>
        )
    }
}

Header.propTypes = {
    onAddClick: PropTypes.func.isRequired
};

export default Header