import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore, applyMiddleware, compose } from "redux";
import {thunk} from "redux-thunk";
import { Provider } from "react-redux";
import { HashRouter as Router } from "react-router-dom";
import Allroutes from "./AllRoutes";
import "./App.css";
import { reducers } from "./reducers";

const root = ReactDOM.createRoot(document.getElementById("root"));

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middleware))
);

root.render(
  <Provider store={store}>
    <Router>
      <App />
      <Allroutes />
    </Router>
  </Provider>
);

reportWebVitals();
