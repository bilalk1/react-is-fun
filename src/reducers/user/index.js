import * as types from '../../type';

const INITIAL_STATE = {
  fetching: false,
  tempUsers: [],
  fetch: false,
  error: null,
  search: '',
  users: []
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.USER_FETCH: {
      return state = { ...state, fetching: true }
    }
    case types.USER_FETCH_REJECTED: {
      return state = { ...state, fetching: false, error: action.payload }
    }
    case types.USER_FETCH_FULFILLED: {
      return state = { ...state, fetching: false, fetch: true, users: action.payload }
    }
    case types.INPUT_SEARCH: {
      return {
        ...state,
        tempUsers: [],
        search: action.payload
      }
    }
    case types.USER_FILTER: {
      return state = {
        ...state, tempUsers: state.users.filter(u => ((u.login.indexOf(state.search) > -1) && u))
      }
    }
    case types.USER_SORT: {
      return state = {
        ...state, tempUsers: state.users.sort((compareObjects))
      }
    }
    default: {
      return state = { ...state }
    }
  }
};

const compareObjects = (a, b) => ((a.login.toLowerCase() < b.login.toLowerCase()) && -1);
