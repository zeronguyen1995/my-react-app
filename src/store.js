import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/index.js";
import SagaMiddleware from "redux-saga";
import { sagaRoot } from "./sagas/root";
const saga = SagaMiddleware();

const store = createStore(reducers, applyMiddleware(saga));

saga.run(sagaRoot);
export default store;