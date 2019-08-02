import React, { Component } from 'react';
import { UserList } from './components/user-list';
import './app.css';

export class App extends Component {
  render() {
    return (
      <div className="App" >
        <UserList />
      </div>
    )
  }
}
