import React from 'react';

const NavigationBar = () => {

        return (
           <nav className="navbar navbar-default">
               <div className="container-fluid">
                   <div className="navbar-header">
                       <a className="navbar-brand" href="#">Todos</a>
                   </div>
                   <div className="collapse navbar-collapse" id="rom">
                       <ul className="nav navbar-nav navbar-right">
                           <li><a href="#">Sign up</a></li>
                       </ul>
                   </div>
               </div>

           </nav>
        )
    };

export default NavigationBar;