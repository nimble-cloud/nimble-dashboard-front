// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800.css";
import "@fontsource/montserrat/900.css";
import ThemeCtxProvider from "./themecontext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeCtxProvider>
    <App />
  </ThemeCtxProvider>
);
