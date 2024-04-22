import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserContext } from "./components/context/userContext.jsx";
import { RepoContextProvider } from "./components/context/ReposContext.jsx";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./components/pages/ErrorBoundary.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContext>
        <RepoContextProvider>
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </RepoContextProvider>
      </UserContext>
    </BrowserRouter>
  </React.StrictMode>
);
