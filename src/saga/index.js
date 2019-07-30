

import { all, fork, takeLatest } from 'redux-saga/effects';
import * as userSaga from './user';
import * as types from '../type'

function* watcherSagaUser() {
  yield takeLatest(types.USER_FETCH, userSaga.handleUsersLoad)
}

function* watcherSaga() {
  yield all([fork(watcherSagaUser)]);
}

export const rootSaga = watcherSaga;