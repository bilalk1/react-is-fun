import { IError } from '../type';

export { USERS_URL } from './urls';

export const handleError = ({ message } : IError ) : string => message;
