export const getFetching = (state) => {
    let { users: { fetching } } = selectUserFromState(state);
    return fetching;
}
export const getSearch = (state) => {
    let { users: { search } } = selectUserFromState(state);
    return search;
}
export const getUsers = (state) => {
    let { users, search, sort } = selectUserFromState(state);
    let tUsers = (search) ? getFilterUser(users, search) : state.user.users;
    return (sort) ? getSortUser(tUsers) : tUsers;
}
export const getFilterUser = (users, search) => {
    let tUsers = [...users];
    return tUsers.filter(u => ((u.login.indexOf(search) > -1) && u));
}
export const getSortUser = (users) => {
    let tUsers = [...users];
    return tUsers.sort(compareObjects);
}

const selectUserFromState = (state) => state.user;
const compareObjects = (a, b) => ((a.login.toLowerCase() < b.login.toLowerCase()) && -1);
