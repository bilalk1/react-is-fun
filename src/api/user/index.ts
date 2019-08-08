import { handleError, USERS_URL } from '../../utils';
import { IUser } from '../../interfaces';


export const fetchUsers = async () : Promise<Array<IUser> | string> => {
  try {
    const response : Response = await fetch(USERS_URL);
    const users : Array<IUser> = await response.json();
    return users;
  }
  catch (error) {
    return handleError(error);
  }
};
