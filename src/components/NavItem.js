import React, {useState} from 'react'

function NavItem(props) {
    const [open,setOpen] = useState(false);
    const handleMenu = (e) => {
        e.preventDefault(e);
        setOpen(!open)
    }
    return (
        <li className="nav-item"
       onClick = { (e) => handleMenu(e) }
        >
            <a href="" className="nav-link">
                { props.link }
            </a>  
            <div className="menu">
                { open? props.children : null }
            </div>

        </li>
    )
}

export default NavItem
