const selectUserFromState = (state) => state.user;
export const getFetching = (state) => selectUserFromState(state).fetching;
export const getSearch = (state) => selectUserFromState(state).search;
export const getUsers = (state) => {
    const { users, search, sort } = selectUserFromState(state);
    const tUsers = search ? getFilterUser(users, search) : state.user.users;
    return sort ? getSortUser(tUsers) : tUsers;
}
export const getFilterUser = (users, search) => users.filter(u => ((u.login.indexOf(search) > -1) && u));
export const getSortUser = (users) => [...users].sort(compareObjects);
const compareObjects = (a, b) => ((a.login.toLowerCase() < b.login.toLowerCase()) && -1);
