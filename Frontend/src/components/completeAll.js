import React from 'react';

class CompleteAll extends React.Component {

    render() {
        if (this.props.display) {
            return (  <input type="checkbox" checked={this.props.check} onChange={this.props.onCompleteAllClick}/>);
        }
        else {
            return null;
        }
    }
}

export default CompleteAll