import { combineReducers } from 'redux';
import * as user from './user';

export const rootReducer = combineReducers({
    user: user.reducer,
});
