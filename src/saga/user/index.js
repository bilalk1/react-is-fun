import { call, put } from 'redux-saga/effects';
import * as userActions from '../../actions/users';
import { fetchUsers } from '../../api/user';
import { utils } from '../../utils';

function* handleUsersLoad() {
  try {
    const users = yield call(fetchUsers);
    yield put(userActions.fetchUsersFulfill(users));
  } catch (e) {
    yield put(userActions.fetchUsersError(utils.helpers.handleError(e)));
  }
}
export const handleUsersFetch = handleUsersLoad;
