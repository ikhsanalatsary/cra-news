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
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
