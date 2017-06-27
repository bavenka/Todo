import React from 'react';

class TodoTextInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {text: this.props.text || ''};
        this.onKeyDown=this.onKeyDown.bind(this);
    }

    onKeyDown(event) {
        if (event.keyCode !== 13) {
            return
        }
        event.preventDefault();
        const text = event.target.value.trim();
        if (!text) {
            return;
        }
        this.props.onAddClick(text);
        this.setState({text: ''});
    }

    render() {
        return (
            <input type="text"
                   autoFocus="true"
                   placeholder={this.placeholder}
                   onKeyDown={this.onKeyDown}
            />
        )
    }
}
export default TodoTextInput