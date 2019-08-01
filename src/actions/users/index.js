import * as types from '../../type';

export const fetchUsersFulfill = payload => ({ type: types.USER_FETCH_FULFILLED, payload });
export const searchInput = payload => ({ type: types.INPUT_SEARCH, payload });
export const fetchUsersError = payload => ({ type: types.USER_FETCH_REJECTED, payload });
export const fetchUsers = () => ({ type: types.USER_FETCH });
export const filterUser = () => ({ type: types.USER_FILTER });
export const sortUser = () => ({ type: types.USER_SORT });
