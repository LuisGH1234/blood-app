import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Routes from "./routes";
import * as serviceWorker from "./serviceWorker";
import "react-datepicker/dist/react-datepicker.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

require('dotenv').config();

ReactDOM.render(<Routes />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
