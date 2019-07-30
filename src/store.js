import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import { reducer } from './reducers';
import logger from 'redux-logger';
import { rootSaga } from './saga';

const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(sagaMiddleware, logger);
export const store = createStore(reducer, middleware);
sagaMiddleware.run(rootSaga)
