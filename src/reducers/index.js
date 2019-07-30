import { combineReducers } from 'redux';
import * as user from './user';

export const reducer = combineReducers({
  user: user.reducer
});
