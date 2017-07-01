import React,{PropTypes} from 'react';

class TodoTextInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {text: this.props.text || ''};
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    onKeyDown(event) {
        if (event.keyCode !== 13) {
            return
        }
        event.preventDefault();
        const text = event.target.value.trim();
        this.props.onSave(text);
        this.setState({text: ''});
    }

    onChange(event) {
        this.setState({text: event.target.value})
    }

    onBlur (event) {
        if(this.props.editing) {
            this.props.onSave(event.target.value)
        }
    }

    render() {
        return (
            <input type="text"
                   autoFocus="true"
                   onChange={this.onChange}
                   value={this.state.text}
                   placeholder={this.props.placeholder}
                   onKeyDown={this.onKeyDown}
                   onBlur={this.onBlur}
            />
        )
    }
}

TodoTextInput.propTypes = {
    onSave: PropTypes.func.isRequired,
    text: PropTypes.string,
    editing: PropTypes.bool,
    placeholder:PropTypes.string,
};

export default TodoTextInput