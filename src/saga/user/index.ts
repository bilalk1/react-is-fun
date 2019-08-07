import { call, put } from 'redux-saga/effects';
import { fetchUsersFulfill, fetchUsersError } from '../../actions/users';
import { fetchUsers } from '../../api/user';
import { handleError } from '../../utils';
import { IUser } from '../../type';

export function* handleUsersSaga () : IterableIterator<IUser | string> {
  try {
    const users = yield call(fetchUsers);
    yield put(fetchUsersFulfill(users));
  } catch (e) {
    yield put(fetchUsersError(handleError(e)));
  }
}
