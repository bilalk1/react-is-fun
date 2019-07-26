import axios from 'axios';

export function fetchUsers() {
    return function (dispatch) {
        dispatch({ type: 'FETCH_USER_PENDING' });
        axios.get('https://api.github.com/users')
            .then((res) => {
                dispatch({ type: 'FETCH_USER_FULFILLED', payload: res.data })
            })
            .catch((error) => {
                dispatch({ type: 'FETCH_USER_REJECTED', payload: error })
            });
    }
}

export function fetchUsersPending() {
    return {
        type: 'FETCH_USER_PENDING'
    }
}
export function fetchUsersError(error) {
    return {
        type: 'FETCH_USER_REJECTED',
        payload: error
    }
}
export function fetchUsersFulfill(users) {
    return {
        type: 'FETCH_USER_FULFILLED',
        payload: users
    }
}

export function searchInput(searchInput) {
    return {
        type: 'SEARCH_INPUT',
        payload: searchInput
    }
}

export function filterUser() {
    return {
        type: 'FILTER_USER'
    }
}
export function sortUser() {
    return {
        type: 'SORT_USER'
    }
}