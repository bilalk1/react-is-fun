import { camel } from 'change-case-object';
import * as types from '../../type';
const INITIAL_STATE = {
  fetching: true,
  error: null,
  search: '',
  users: [],
  sort: false
};

export const reducer = (state = INITIAL_STATE, action) => {
  action = camel(action);
  switch (action.type) {
    case types.USER_FETCH: {
      return state = {
        ...state,
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
      }
    }
    case types.USER_SORT: {
      return state = {
        ...state,
        sort: true
      }
    }
    default: {
      return state = { ...state }
    }
  }
};
