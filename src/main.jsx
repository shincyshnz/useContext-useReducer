import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CounterContextProvider } from "./context/CounterContext.jsx";
import { CounterCR } from "./components/Counter/CounterCR.jsx";
import { ContextCRProvider } from "./context/ContextCR.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CounterContextProvider>
    <ContextCRProvider>
      <App />
    </ContextCRProvider>
  </CounterContextProvider>
);
