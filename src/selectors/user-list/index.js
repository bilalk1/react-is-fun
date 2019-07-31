export const sortUser = (state) => state.user.tempUsers = state.user.tempUsers.sort(compareObjects);
export const getFetching = (state) => state.user.fetching;
export const getSearch = (state) => state.user.search;
export const getUsers = (state) => state.user.users;

export const filterUser = (state) => {
    state.user.tempUsers = state.user.users.filter(u => ((u.login.indexOf(state.user.search) > -1) && u));
    return state
}

const compareObjects = (a, b) => ((a.login.toLowerCase() < b.login.toLowerCase()) && -1);
