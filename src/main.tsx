import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import About from "./About";
import "./index.css";

const Router = () => {
  const [route, setRoute] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopstate = () => {
      setRoute(window.location.pathname);
    };

    window.addEventListener("popstate", handlePopstate);

    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, []);

  switch (route) {
    case "/about":
      return <About />;
    default:
      return <App />;
  }
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
