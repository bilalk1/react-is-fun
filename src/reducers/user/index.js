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
      return state = {
        ...state,
        fetching: true
      }
    }
    case types.USER_FETCH_REJECTED: {
      return state = {
        ...state,
        fetching: false,
        error: action.payload
      }
    }
    case types.USER_FETCH_FULFILLED: {
      return state = {
        ...state,
        fetching: false,
        fetch: true,
        users: action.payload
      }
    }
    case types.INPUT_SEARCH: {
      return {
        ...state,
        search: action.payload
      }
    }
    case types.USER_FILTER: {
      return state = {
        ...state,
        tempUsers: []
      }
    }
    case types.USER_SORT: {
      return state = {
        ...state
      }
    }
    default: {
      return state = { ...state }
    }
  }
};
