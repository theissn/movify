import React from "react";
import ReactDOM from "react-dom";
// Import F7 Bundle
import Framework7 from "framework7/framework7.esm.bundle.js";

// Import F7-React Plugin
import Framework7React from "framework7-react";

import "framework7/css/framework7.min.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// Init F7-React Plugin
Framework7.use(Framework7React);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
