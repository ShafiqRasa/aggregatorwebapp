import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store";
import { LayoutProvider } from "./context/layout-context";
import { PersistGate } from "redux-persist/integration/react";
import { SearchProvider } from "./context/search-key.context";
import "./my-types.d.ts";

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LayoutProvider>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <SearchProvider>
              <App />
            </SearchProvider>
          </PersistGate>
        </Provider>
      </LayoutProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
