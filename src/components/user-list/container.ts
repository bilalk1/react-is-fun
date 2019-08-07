import { connect } from 'react-redux';
import { UserList } from './user-list';
import { getFetching, getSearch, getUsers, getSort, getError } from '../../selectors/user-list';
import { searchInput, fetchUsers, filterUser, sortUser } from '../../actions/users';
import { IUserListState, IState } from '../../interfaces';

const mapStateToProps = (state :  IState) : IUserListState => ({
  fetching: getFetching(state),
  search: getSearch(state),
  users: getUsers(state),
  error: getError(state),
  sort: getSort(state),
});

const mapDispatchToProps = {
  searchInput,
  fetchUsers,
  filterUser,
  sortUser,
};

export const userListContainer = connect(mapStateToProps, mapDispatchToProps)(UserList);
