import { applyMiddleware, compose, legacy_createStore as createStore } from "redux";
import reducers from "../reducers/index";
import thunk from "redux-thunk";

const middlewares = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(...middlewares))
  );
  return store;
}