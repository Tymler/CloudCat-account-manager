import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux"

// import "@/assets/styles/antd-overrides.less";
import "antd/dist/antd.css";

import store from "@/redux/store";

import '@/index.scss';
import "@/assets/styles/reset.scss"

import App from '@/AppContainer';

ReactDOM.render(
  // <React.StrictMode>
  // </React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
