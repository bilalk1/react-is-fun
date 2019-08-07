import { connect } from 'react-redux';
import { UserList } from './user-list';
import { getFetching, getSearch, getUsers } from '../../selectors/user-list';
import { searchInput, fetchUsers, filterUser, sortUser } from '../../actions/users';
import { IUserListState, IUserListProps, IState } from '../../type';

const mapStateToProps = (state :  IState) : IUserListState => ({
  fetching: getFetching(state),
  search: getSearch(state),
  users: getUsers(state),
});

const mapDispatchToProps : any = {
  searchInput,
  fetchUsers,
  filterUser,
  sortUser,
};

export const userListContainer = connect(mapStateToProps, mapDispatchToProps)(UserList);
