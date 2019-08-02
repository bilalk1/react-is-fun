import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { camelCaseMiddleware } from './middleware';
import { rootReducer } from './reducers';
import { rootSaga } from './saga';

const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware, logger, camelCaseMiddleware);
export const store = createStore(rootReducer, middleware);
sagaMiddleware.run(rootSaga);
