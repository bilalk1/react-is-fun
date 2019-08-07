import { IError } from '../interfaces';

export { USERS_URL } from './urls';

export const handleError = ({ message } : IError) : string => message;
