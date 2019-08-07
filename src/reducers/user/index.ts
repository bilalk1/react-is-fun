// import { camel } from 'change-case-object';
import {
  IUserListState, USER_FETCH_REJECTED,
  USER_FETCH_FULFILLED,
  INPUT_SEARCH,
  USER_FILTER,
  USER_FETCH,
  USER_SORT,
  IUserAction,
} from '../../type';

const INITIAL_STATE : IUserListState = {
  fetching: true,
  error: '',
  search: '',
  users: [],
  sort: false,
};

export const reducer = (state : IUserListState = INITIAL_STATE , action : IUserAction) : IUserListState => {
  // action = camel(action);
  switch (action.type) {
    case USER_FETCH: {
      return state = {
        ...state,
      };
    }
    case USER_FETCH_REJECTED: {
      return state = {
        ...state,
        fetching: false,
        error: action.payload,
      };
    }
    case USER_FETCH_FULFILLED: {
      return state = {
        ...state,
        fetching: false,
        users: action.payload,
      };
    }
    case INPUT_SEARCH: {
      return {
        ...state,
        search: action.payload,
      };
    }
    case USER_FILTER: {
      return state = {
        ...state,
      };
    }
    case USER_SORT: {
      return state = {
        ...state,
        sort: true,
      };
    }
    default: {
      return state = { ...state };
    }
  }
};
