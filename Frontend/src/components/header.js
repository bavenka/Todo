import React, {PropTypes} from 'react';
import TodoTextInput from '../components/todoTextInput'
import CompleteAll from '../containers/completeAll'

class Header extends React.Component {

    render() {
        return (
            <header>
                <h1>Todos</h1>
                <CompleteAll/>
                <TodoTextInput onSave={(text) => this.props.onAddClick(text)}
                               placeholder="What needs to be done?"/>
            </header>
        )
    }
}

Header.propTypes = {
    onAddClick: PropTypes.func.isRequired
};

export default Header