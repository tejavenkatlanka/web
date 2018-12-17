import React, { Component } from 'react';
import './App.css';
import Time from './Time.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> Teja Venkat  </h1> 
            <Time></Time> 
            <div>Thanks to</div> 
            <div>#GitHub #React</div> 
        </header>
      </div>
    );
  }
}

export default App;
