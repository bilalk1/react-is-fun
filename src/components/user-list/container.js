import * as userSelectors from '../../selectors/user-list'
import * as userActions from '../../actions/users';
import React, { Component } from 'react';
import { UserList } from './user-list';
import { connect } from 'react-redux';

class UserListContainer extends Component {
  render() {
    return <UserList {...this.props} />
  }
};

const mapStateToProps = (state) => {
  return {
    tempUsers: userSelectors.sortUser(userSelectors.filterUser(state)),
    fetching: userSelectors.getFetching(state),
    search: userSelectors.getSearch(state),
    users: userSelectors.getUsers(state),

  }
};

const mapDispatchToProps = {
  searchInput: userActions.searchInput,
  fetchUsers: userActions.fetchUsers,
  filterUser: userActions.filterUser,
  sortUser: userActions.sortUser,
}

export const userListContainer = connect(mapStateToProps, mapDispatchToProps)(UserListContainer);
