import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./redux/store";
import App from "./components/App.jsx";
import DeviceProvider from "./components/DeviceProvider/DeviceProvider.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <DeviceProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </DeviceProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
