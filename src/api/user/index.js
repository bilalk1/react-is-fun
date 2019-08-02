import { handleError, USERS_URL } from '../../utils';

export const fetchUsers = async () => {
  try {
    const users = await fetch(USERS_URL);
    return await users.json();
  }
  catch (error) {
    handleError(error)
  }
};
