import { NextFunctionComponent } from 'next';

// import { camel } from 'change-case-object';

export const camelCaseMiddleware = (store)  =>
    (next : NextFunctionComponent)  => (action )  => {
        const { payload } = action;
        // camel(payload);
        next(action);
    };
