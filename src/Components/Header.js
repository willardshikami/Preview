import React, { Component } from 'react';
import './css/header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className='header-background'>
					<h1 className='movie-title'>TITLE</h1>
        </div>
      </div>
    );
  }
}

export default Header;
