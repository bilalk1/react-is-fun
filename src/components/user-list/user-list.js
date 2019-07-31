import React, { Component } from 'react';
import { Search } from '../search';
import { User } from '../user';

export class UserList extends Component {

  componentDidMount() {
    this.props.fetchUsers()
  }
  searchHandler = (event) => {
    let { nativeEvent: { target: { value } } } = event;
    this.props.searchInput(value);
    this.props.filterUser();
  }
  sortHandler = () => {
    this.props.sortUser();
  }
  render() {
    let { fetching, tempUsers } = this.props;
    return (
      <div>
        <h1>Users : {this.props.simpleText}</h1>
        <Search searcHandler={this.searchHandler} sortHandler={this.sortHandler} />
        {fetching
          ? 'Loading...'
          : <User users={tempUsers} />
        }
      </div>
    )
  }
};
