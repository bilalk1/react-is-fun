import { all, fork, takeLatest } from 'redux-saga/effects';
import { handleUsersSaga } from './user';
import * as types from '../type';

function* watcherSagaUser() {
  yield takeLatest(types.USER_FETCH, handleUsersSaga);
}

export function* rootSaga() {
  yield all([fork(watcherSagaUser)]);
}
