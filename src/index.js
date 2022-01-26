import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import App from './App';

import { createStore } from "redux";
import { Provider } from "react-redux";
import { contactReducer } from "./reducers/contactReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(contactReducer, composeWithDevTools());
const rootElement = document.getElementById("root");


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
