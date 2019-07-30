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
    tempUsers: userSelectors.getTempUsers(state),
    fetching: userSelectors.getFetching(state),
    search: userSelectors.getSearch(state),
    users: userSelectors.getUsers(state),

  }
};

const mapDispatchToProps = (dispatch) => ({
  searchInput: (value) => dispatch(userActions.searchInput(value)),
  fetchUsers: () => { dispatch(userActions.fetchUsers()) },
  filterUser: () => { dispatch(userActions.filterUser()) },
  sortUser: () => { dispatch(userActions.sortUser()) }

})


export const userListContainer = connect(mapStateToProps, mapDispatchToProps)(UserListContainer);
