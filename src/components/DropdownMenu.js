import React from 'react'
import DropdownItem from './DropdownItem'
import img from './person.jpg';
function DropdownMenu() {
    return (
        <div className="dropdown">
            <DropdownItem>
                <h3>what we do</h3>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
            </DropdownItem>

            <DropdownItem>
                <h4>features</h4>
                <ul>
                    <li><a href="">titulo1</a></li>
                    <li><a href="">titulo2</a></li>
                    <li><a href="">titulo3</a></li>
                    <li><a href="">titulo4</a></li>
                </ul>
            </DropdownItem>

            <DropdownItem>
                <h3>great support team </h3>
                    <div className="support">
                        <img 
                        src={img} 
                        width="200"
                        />
                    </div>
            </DropdownItem>
        </div>
    )
}

export default DropdownMenu
