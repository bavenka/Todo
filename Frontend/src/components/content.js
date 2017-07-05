import React from 'react'
import {connect} from 'react-redux'
import Header from '../containers/header'
import VisibleTodoList from '../containers/visibleTodoList'
import Footer from '../components/footer'
import {fetchTodosByUserId} from  '../actions/fetchTodosByUserId'

class Content extends React.Component {

    componentWillMount() {
        const {dispatch} = this.props;
        //TODO Брать id текущего пользователя из store
        dispatch(fetchTodosByUserId('595ab20b6dd8163038f2665f'));
    }

    render() {
        return <div className="container">
            <Header/>
            <VisibleTodoList/>
            <Footer/>
        </div>
    }
}

export default connect()(Content)