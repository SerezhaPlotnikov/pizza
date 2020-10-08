import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { MainReducer } from "./main/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  MainReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
