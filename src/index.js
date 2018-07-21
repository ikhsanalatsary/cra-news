import "semantic-ui-css/semantic.min.css";
import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter
} from "react-router-dom";
import { Container } from "semantic-ui-react";
import SourceList from "./modules/source/SourceList";
import News from "./modules/news/News";
import Menu from "./modules/menu/Menu";
// import "./styles.css";

function App() {
  return (
    <Router>
      <Container>
        <Menu />
        <Switch>
          <Route exact path="/" component={SourceList} />
          <Route path="/source/:sourceId" component={News} />
        </Switch>
      </Container>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
