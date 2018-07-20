import "semantic-ui-css/semantic.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { Container } from "semantic-ui-react";
import SourceList from "./modules/source/SourceList";
import News from "./modules/news/News";
import Menu from "./modules/menu/Menu";
// import "./styles.css";

function App() {
  return (
    <Container>
      <Menu />
      <News />
    </Container>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
