import { utils } from '../../utils'

export const fetchUsers = async () => {
  try {
    const users = await fetch(utils.urls.USERS_URL);
    return await users.json();
  }
  catch (error) {
    utils.helpers.handleError(error)
  }
};
