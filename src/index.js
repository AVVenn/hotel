import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./AppRouter";
import { BrowserRouter } from "react-router-dom";
import { store, persistor } from "./redux/index";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRouter />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
