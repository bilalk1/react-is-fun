import { connect } from 'react-redux';
import { UserList } from './user-list';
import { getFetching, getSearch, getUsers } from '../../selectors/user-list'
import { searchInput, fetchUsers, filterUser, sortUser } from '../../actions/users';

const mapStateToProps = (state) => ({
  fetching: getFetching(state),
  search: getSearch(state),
  users: getUsers(state),
});

const mapDispatchToProps = {
  searchInput: searchInput,
  fetchUsers: fetchUsers,
  filterUser: filterUser,
  sortUser: sortUser,
}

export const userListContainer = connect(mapStateToProps, mapDispatchToProps)(UserList);
