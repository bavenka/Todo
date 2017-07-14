import React from 'react'
import {connect} from 'react-redux'
import Header from '../containers/header'
import VisibleTodoList from '../containers/visibleTodoList'
import Footer from '../containers/footer'
import {fetchTodosByUserId} from  '../API/Todos/fetchTodosByUserId'
import setVisibilityFilter from '../actions/setVisibilityFilter'

class Content extends React.Component {

    componentWillMount() {
        const {dispatch} = this.props;
        dispatch(fetchTodosByUserId());
        dispatch(setVisibilityFilter(this.props.filter));
    }

    render() {
        return (
            <div className="container">
                <Header/>
                <VisibleTodoList/>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = (state, {match}) => {
    return {
        filter: match.params.filter
    }
};

export default connect(mapStateToProps)(Content)