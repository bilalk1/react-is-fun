import * as utils from '../../utils/urls'

export const fetchUsers = async () => {
  try {
    const users = await fetch(utils.USERS_URL);
    return await users.json();
  }
  catch (e) {
    return e
  }
};
