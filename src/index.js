import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import App from "./App";
import store from "./redux/config/configStore";

const theme = {
  BLUE_1: "#B7CEE8",
  BLUE_2: "#90b4dc",
  BLUE_3: "#577399",
  BLUE_4: "#495867",
  GREY: "#D8DBE2",
  LIGHT_GREY: "#E7E9ED",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
