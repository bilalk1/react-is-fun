import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import { camelCaseMiddleware } from './middleware';
import { rootReducer } from './reducers';
import { rootSaga } from './saga';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, logger, camelCaseMiddleware];
const appliedMiddlewares = applyMiddleware(...middleware);
const composedWithDevTools = composeWithDevTools(appliedMiddlewares);
export const store = createStore(rootReducer, composedWithDevTools);
sagaMiddleware.run(rootSaga);
