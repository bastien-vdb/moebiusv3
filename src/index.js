import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import Start from "components/Start";
// import AOS from "aos";
// import "aos/dist/aos.css";

/** Get your free Moralis Account https://moralis.io/ */

// const APP_ID = process.env.REACT_APP_MORALIS_APPLICATION_ID;
// const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL;

const Application = () => {
  // const isServerInfo = APP_ID && SERVER_URL ? true : false;
  //Validate

  return (
    <div>
      <Start />
    </div>
  );
};

ReactDOM.render(
  <StrictMode>
    <Application />
  </StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
