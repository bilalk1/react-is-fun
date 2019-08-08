import { IAction } from '../interfaces';
import { Dispatch } from 'react';
import { MiddlewareAPI } from 'redux';
import { camalCaseConversion } from '../utils/urls';

//TODO Return Types TS
export const camelCaseMiddleware = (store : MiddlewareAPI) : any =>
  (next : Dispatch<IAction>) : any => (action : IAction) : void => {
    const { payload, type } = action;
    if (payload && type === 'USER_FETCH_FULFILLED') {
      action.payload = camalCaseConversion(payload);
    }
    next(action);
  };
