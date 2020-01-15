import React from 'react';

//stateless functional component 
const NavBar = (props) => {   
    console.log('NavBar-rendered')
    return ( 
    <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
            TotalCounters: {''}
            <span className="badge badge-pill badge-secondary">
                {props.totalCounters}
            </span>
        </a>
    </nav> );   
}

export default NavBar;