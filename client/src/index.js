import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import countryReducer from "./store/reducer/countryReducer";
import errorReducer from "./store/reducer/errorReducer";
import authReducer from "./store/reducer/authReducer";
import commentReducer from "./store/reducer/commentReducer";


const Rootreducer = combineReducers({
  countryReducer: countryReducer,
  errorReducer: errorReducer,
  authReducer: authReducer,
  commentReducer: commentReducer

});

export const store = createStore(Rootreducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
