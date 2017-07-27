import React from 'react';
import {NavLink, Link} from 'react-router-dom'
import Auth from '../utils/auth'
import {connect} from 'react-redux'
import removeCurrentUser from '../actions/removeCurrentUser'

class NavigationBar extends React.Component {

    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        e.preventDefault();
        Auth.deauthenticateUser();
        this.props.removeCurrentUser();
    }

   render() {

       let isAuthenticated = Auth.isUserAuthenticated();

       const guestLinks = ( <ul className="nav navbar-nav navbar-right">
           <li><NavLink to="/login">Log In</NavLink></li>
           <li><NavLink to="/signup">Sign Up</NavLink></li>
       </ul>);

       const userLinks = (
           <ul className="nav navbar-nav navbar-right">
               <li><a href="#"onClick={this.onClick}>Log Out</a></li>
           </ul>);

       return (
           <nav className="navbar navbar-default">
               <div className="container-fluid">
                   <div className="navbar-header">
                       <NavLink to="/" className="navbar-brand">Todos</NavLink>
                   </div>
                   <div className="collapse navbar-collapse">
                       {userLinks}
                   </div>
               </div>

           </nav>
       )
   }
}

export default connect(null, {removeCurrentUser})(NavigationBar);