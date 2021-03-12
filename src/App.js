import React from 'react'

import './App.css';
import Carousel from './components/Carousel';
import DropdownMenu from './components/DropdownMenu';
import Navbar from './components/Navbar';
import NavItem from './components/NavItem';

function App() {
  return (
    <div className="App">
      <Navbar>
        <NavItem link = "home"/>
        <NavItem link = "services">
           <DropdownMenu/>
        </NavItem>
        <NavItem link = "portfolio"/>
      </Navbar>
      {/* <Carousel/> */}
      
    </div>
  );
}

export default App;
