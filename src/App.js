import React, { Component } from 'react';
import Navigation from './Components/Navigation';
import TitleBar from './Components/TitleBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TitleBar />
        <Navigation/>
      </div>
    );
  }
}

export default App;
