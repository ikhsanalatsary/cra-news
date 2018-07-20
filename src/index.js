import React from "react";
import ReactDOM from "react-dom";
import SourceList from "./modules/source/SourceList";
import Menu from "./modules/menu/Menu";
import "semantic-ui-css/semantic.min.css";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Menu />
      <SourceList />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
