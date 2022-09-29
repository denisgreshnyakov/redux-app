import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";
import App from "./components/app";

//глобальное хранилище в которое входит Reducer и State
const store = createStore(reducer);

//для того, чтобы использовать Store во всем нашем приложении,
//мы использовали такой компонент как Provider
//благодаря этому, мы можем использовать компонент Store
//ниже по иерархии
ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById("root")
);
