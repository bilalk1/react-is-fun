import * as types from '../../type';

export const fetchUsersFulfill = users => ({ type: types.USER_FETCH_FULFILLED, payload: users });
export const searchInput = searchInput => ({ type: types.INPUT_SEARCH, payload: searchInput });
export const fetchUsersError = error => ({ type: types.USER_FETCH_REJECTED, payload: error });
export const fetchUsers = () => ({ type: types.USER_FETCH });
export const filterUser = () => ({ type: types.USER_FILTER });
export const sortUser = () => ({ type: types.USER_SORT });
