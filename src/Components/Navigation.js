import React, { Component } from 'react';
import {Navbar, NavItem} from 'react-materialize'
import './css/navigation.css';


class Navigation extends Component {
  render() {
    return (

    <div>
      <Navbar className='title-bar'>
	      <NavItem className='navitem' href='get-started.html'>Getting started</NavItem>
	      <NavItem 
        href='components.html'>Components</NavItem>
    </Navbar>

    </div>
    );
  }
}

export default Navigation;