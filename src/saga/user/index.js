import { call, put } from 'redux-saga/effects';
import { fetchUsersFulfill, fetchUsersError } from '../../actions/users';
import { fetchUsers } from '../../api/user';
import { handleError } from '../../utils';

export function* handleUsersSaga() {
  try {
    const users = yield call(fetchUsers);
    yield put(fetchUsersFulfill(users));
  } catch (e) {
    yield put(fetchUsersError(handleError(e)));
  }
}
