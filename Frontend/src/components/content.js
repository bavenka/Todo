import React from 'react'
import {connect} from 'react-redux'
import Header from '../containers/header'
import VisibleTodoList from '../containers/visibleTodoList'
import Footer from '../containers/footer'
import {fetchTodosByUserId} from  '../API/Todos/fetchTodosByUserId'

class Content extends React.Component {

    componentWillMount() {
        const {dispatch} = this.props;
        dispatch(fetchTodosByUserId());
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

export default connect()(Content)