import { NextFunctionComponent } from 'next';

// import { camel } from 'change-case-object';

export const camelCaseMiddleware = (store:any) :any =>
    (next : NextFunctionComponent)  => (action :any)  => {
        const { payload } = action;
        // camel(payload);
        next(action);
    };
