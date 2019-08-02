import { camel } from "change-case-object";

export const camelCaseMiddleware = store => next => action => {
    let { payload } = action;
    camel(payload);
    next(action);
};
