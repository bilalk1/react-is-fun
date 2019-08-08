import {
    IUserFetchFulfilledAction,
    IUserFetchRejectedAction,
    IInputSearchAction,
    IUserFilterAction,
    IUserFetchAction,
    IUserSortAction,
    IUser,
} from '../../interfaces';
import {
    USER_FETCH_FULFILLED, USER_FETCH_REJECTED, INPUT_SEARCH, USER_FILTER, USER_FETCH, USER_SORT,
} from '../../type';

export const fetchUsersFulfill = (payload : Array<IUser>) : IUserFetchFulfilledAction => ({
    type: USER_FETCH_FULFILLED,
    payload,
});
export const fetchUsersError = (payload : string) : IUserFetchRejectedAction => ({
    type: USER_FETCH_REJECTED,
    payload,
});
export const searchInput = (payload : string) : IInputSearchAction => ({ type: INPUT_SEARCH, payload });
export const filterUser = () : IUserFilterAction => ({ type: USER_FILTER });
export const fetchUsers = () : IUserFetchAction => ({ type: USER_FETCH });
export const sortUser = () : IUserSortAction => ({ type: USER_SORT });
