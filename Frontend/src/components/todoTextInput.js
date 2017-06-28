import React from 'react';

class TodoTextInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {text: this.props.text || ''};
        this.onKeyDown=this.onKeyDown.bind(this);
        this.onChange=this.onChange.bind(this);
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
        this.props.onSave(text);
        this.setState({text: ''});
    }

    onChange (event) {
        this.setState({ text: event.target.value })
    }

    render() {
        console.log(this.props);
        return (
            <input type="text"
                   autoFocus="true"
                   onChange={this.onChange}
                   value={this.state.text}
                   placeholder={this.props.placeholder}
                   onKeyDown={this.onKeyDown}
            />
        )
    }
}
export default TodoTextInput