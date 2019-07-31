

import { all, fork, takeLatest } from 'redux-saga/effects';
import { handleUsersFetch } from './user';
import * as types from '../type';

function* watcherSagaUser() {
  yield takeLatest(types.USER_FETCH, handleUsersFetch)
}

function* watcherSaga() {
  yield all([fork(watcherSagaUser)]);
}

export const rootSaga = watcherSaga;
