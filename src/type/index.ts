import { ChangeEvent } from 'react';

export const USER_FETCH_FULFILLED = 'USER_FETCH_FULFILLED';
export const USER_FETCH_REJECTED = 'USER_FETCH_REJECTED';
export const INPUT_SEARCH = 'INPUT_SEARCH';
export const USER_FILTER = 'USER_FILTER';
export const USER_FETCH = 'USER_FETCH';
export const USER_SORT = 'USER_SORT';

export interface IUserAction {
  type : typeof USER_SORT | typeof USER_FILTER | typeof USER_FETCH | typeof INPUT_SEARCH |
  typeof USER_FETCH_FULFILLED | typeof USER_FETCH_REJECTED;
  payload : string & Array<IUser> & IError;
}
export interface IUserSortAction {
  type : typeof USER_SORT;
}
export interface IUserFilterAction {
  type : typeof USER_FILTER;
}
export interface IUserFetchAction {
  type : typeof USER_FETCH;
}
export interface IInputSearchAction {
  type : typeof INPUT_SEARCH;
  payload : string;
}
export interface IUserFetchFulfilledAction {
  type : typeof USER_FETCH_FULFILLED;
  payload : Array<IUser>;
}
export interface IUserFetchRejectedAction {
  type : typeof USER_FETCH_REJECTED;
  payload : string;
}

export interface IUserListState {
  users : Array<IUser>;
  fetching : boolean;
  search : string;
  sort : boolean;
  error : string;
}
export interface IState {
  user : IUserListState;
}
export interface IUserListProps {
  users : Array<IUser>;
  fetching : boolean;
  searchInput (search : string) : IInputSearchAction;
  filterUser (payload : string) : IUserFilterAction;
  fetchUsers () : IUserFetchAction;
  sortUser () : IUserSortAction;
}
export interface IUserProps {
  users : Array<IUser>;
}
export interface IUser {
  received_events_url : string ;
  organizations_url : string;
  subscriptions_url : string;
  followers_url : string;
  following_url : string;
  gravatar_id : string;
  starred_url : string;
  site_admin : boolean;
  avatar_url : string;
  events_url : string;
  gists_url : string;
  repos_url : string;
  html_url : string;
  node_id : string;
  login : string;
  type : string;
  url : string;
  id : number;
}
export interface IError {
  message : string;
}
export interface ISearchProps {
  searcHandler (event : ChangeEvent<HTMLInputElement>) : void;
  sortHandler () : IUserSortAction;
}
