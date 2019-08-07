import { IUserListState, IUser, IState } from '../../type';

const selectUserFromState = (state : IState) : IUserListState => state.user;
export const getFetching = (state : IState) : boolean => selectUserFromState(state).fetching;
export const getSearch = (state : IState) : string => selectUserFromState(state).search;
export const getUsers = (state : IState) : Array<IUser> => {
    const { users, search, sort } = selectUserFromState(state);
    const tUsers = search ? getFilterUser(users, search) : state.user.users;
    return sort ? getSortUser(tUsers) : tUsers;
};
export const getFilterUser = (users : Array<IUser>, search : string) : Array<IUser> =>
    users.filter((u : IUser ) => ((u.login.indexOf(search) > -1) && u));

export const getSortUser = (users : Array<IUser>) : Array<IUser> => [...users].sort(compareObjects);
const compareObjects = (a : IUser, b : IUser) :  any =>
    ((a.login.toLowerCase() < b.login!.toLowerCase()) && -1);
