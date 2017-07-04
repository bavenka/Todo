import React, {PropTypes} from 'react';

class Complete extends React.Component {

    render() {
        return (
            <input type="checkbox" checked={this.props.completed} onChange={this.props.onCompleteClick}/>
        )
    }
}

Complete.propTypes = {
    completed: PropTypes.bool.isRequired,
    onCompleteClick: PropTypes.func.isRequired,
};

export default Complete