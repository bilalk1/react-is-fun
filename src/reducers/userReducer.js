
export default function reducer(state = {
    fetching: false,
    fetch: false,
    users: [],
    error: null,
    search: '',
    tempUsers: []
}, action) {
    switch (action.type) {
        case 'FETCH_USER_PENDING': {
            state = { ...state, fetching: true }
            break;
        }
        case 'FETCH_USER_REJECTED': {
            state = { ...state, fetching: false, error: action.payload }
            break;
        }
        case 'FETCH_USER_FULFILLED': {
            state = { ...state, fetching: false, fetch: true, users: action.payload }
            break;
        }
        case 'SEARCH_INPUT': {
            state = { ...state, tempUsers: [], search: action.payload }
            break;
        }
        case 'FILTER_USER': {
            state = {
                ...state, tempUsers: state.users.filter(u => {
                    if (u.login.indexOf(state.search) > -1) {
                        return u;
                    }
                })
            }

            break;
        }
        case 'SORT_USER': {
            state = {
                ...state, tempUsers: state.users.sort((compareObjects))
            }

            break;
        }
    }
    return state;
};

const compareObjects = function (a, b) {
    if (a.login.toLowerCase() < b.login.toLowerCase()) {
        return -1;
    }
}