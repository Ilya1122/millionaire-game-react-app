import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "store";

import App from "./App";

import "./index.scss";

const root = ReactDOMClient.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
