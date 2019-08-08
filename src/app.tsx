import React, { Component , ReactNode } from 'react';
import { UserList } from './components/user-list';
import './app.css';

export class App extends Component {
  render () : ReactNode {
    return (
      <div className='App' >
        <UserList />
      </div>
    );
  }
}
