import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./redux/store";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
if (process.env.NODE_ENV === "development") {
  reportWebVitals(console.log);
}
serviceWorkerRegistration.register();
