import React, { Component } from 'react';
import {Navbar, NavItem} from 'react-materialize'
import imageUrl from '../images/header.jpg'
import './css/navigation.css';

let styles = {
	backgroundImage: 'url('+ imageUrl+')',
	overflow: 'hidden',
	backgroundSize: 'cover',
	height: '600px',
}

class Navigation extends Component {
  render() {
    return (

    <div>
      <Navbar  style={styles} className='title-bar'>
	      <NavItem className='navitem' href='get-started.html'>Getting started</NavItem>
	      <NavItem 
        href='components.html'>Components</NavItem>
    </Navbar>

    </div>
    );
  }
}

export default Navigation;