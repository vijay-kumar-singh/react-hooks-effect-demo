import React, { Component } from 'react';
import { render } from 'react-dom';
import Profile from './Profile';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Profile/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
