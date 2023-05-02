//Imports
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import GlobalStyle from "./utils/style/globalStyle";
import App from "./components/App";
import "./utils/style/fonts.css";
import "./utils/style/animations.css";

//Render
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
    <Router>
        <GlobalStyle />
        <App />
    </Router>
);
