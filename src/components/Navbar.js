import React from 'react'

function Navbar(props) {
    return (
        <div className = "navbar">
           <ul className="navbar-nav">
                {props.children}
            </ul>         
        </div>
    )
}

export default Navbar
