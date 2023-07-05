import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function About() {
  const navigateTo = (url: any) => {
    window.history.pushState(null, "", url);
    const popStateEvent = new PopStateEvent("popstate");
    window.dispatchEvent(popStateEvent);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React WellCome About Page</h1>
      <p>WellCome About Page</p>
      <button onClick={() => navigateTo("/")}>Go Back Home~ </button>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default About;
