import React, { Component } from 'react';
import Navigation from './Components/Navigation'
import Header from './Components/Header'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Header />
      </div>
    );
  }
}

export default App;
