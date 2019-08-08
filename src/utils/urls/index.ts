import { IUser } from '../../interfaces';
import camelcaseKeys from 'camelcase-keys';

export const USERS_URL = 'https://api.github.com/users';
export const camalCaseConversion = (array : Array<IUser>) : any => (camelcaseKeys(array));
