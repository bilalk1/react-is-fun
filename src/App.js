import { container } from './components/user-list';
import React, { Component } from 'react';
import './App.css';

export class App extends Component {
  render() {
    return (
      <div className="App" >
        <container.userList users={[]} />
      </div>
    )
  }
}
