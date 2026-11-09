import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { store } from "./redux/store/store.jsx";
import { HelmetProvider } from "react-helmet-async";

import App from "./App.jsx";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </Provider>,
);
