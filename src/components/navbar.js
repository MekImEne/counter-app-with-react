import React from 'react';

// Stateless Functional Components
// const NavBar = (props) =>{
const NavBar = ({totalCounters}) =>{ // Destructuring Arguments
    return ( 
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    Navbar  
                    <span 
                        className="badge badge-pill badge-secondary ml-2" > 
                        { totalCounters} 
                    </span>
                </a>
            </div>
        </nav>
    );
} ;

export default NavBar;