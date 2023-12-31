import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./Context/store/index.js";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Favicon url={Walpeper} /> */}
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
);
