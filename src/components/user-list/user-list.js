import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Loading } from '../loading';
import { Search } from '../search';
import { User } from '../user';

export class UserList extends Component {

  componentDidMount() {
    this.props.fetchUsers()
  }
  searchHandler = (event) => {
    let { nativeEvent: { target: { value } } } = event;
    this.props.searchInput(value);
  }
  render() {
    let { users, fetching, sortUser } = this.props;
    return (
      <div>
        <h1>Users :</h1>
        <Search searcHandler={this.searchHandler} sortHandler={sortUser} />
        {fetching
          ? <Loading />
          : <User users={users} />
        }
      </div>
    )
  }
};
User.propTypes = {
  users: PropTypes.array,
  fetching:PropTypes.bool,
  sortUser:PropTypes.func
};
