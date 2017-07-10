import React from 'react';
import {NavLink} from 'react-router-dom'

const NavigationBar = () => {

        return (
           <nav className="navbar navbar-default">
               <div className="container-fluid">
                   <div className="navbar-header">
                       <NavLink to="/" className="navbar-brand">Todos</NavLink>
                   </div>
                   <div className="collapse navbar-collapse">
                       <ul className="nav navbar-nav navbar-right">
                           <li><NavLink to="/login">Log In</NavLink></li>
                           <li><NavLink to="/signup">Sign Up</NavLink></li>
                       </ul>
                   </div>
               </div>

           </nav>
        )
    };

export default NavigationBar;