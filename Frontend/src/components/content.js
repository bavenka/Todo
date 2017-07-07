import React from 'react'
import {connect} from 'react-redux'
import Header from '../containers/header'
import VisibleTodoList from '../containers/visibleTodoList'
import Footer from '../components/footer'
import {fetchTodosByUserId} from  '../API/Todos/fetchTodosByUserId'
import {fake_user_id} from "../constants/fakeUser";

class Content extends React.Component {

    componentWillMount() {
        const {dispatch} = this.props;
        //TODO Брать id текущего пользователя из store
        dispatch(fetchTodosByUserId(fake_user_id));
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