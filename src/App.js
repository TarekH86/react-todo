import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TodoApp from './componenets/TodoApp';

class App extends Component {
  render() {
    return (
      <div>
      <TodoApp />
      </div>
    );
  }
}

export default App;
