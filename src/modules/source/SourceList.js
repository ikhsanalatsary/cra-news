// Component ini untuk menampilkan list Sumber Berita
// Seperti CNN, BBC dan lain-lain

import React from "react";
import { Card } from "semantic-ui-react";
import axios from "axios";

const key = "bd6430747b5f4bb782af75fd45a426df";
const source = `https://newsapi.org/v2/sources?apiKey=${key}`;

class SourceList extends React.Component {
  componentDidMount() {
    axios
      .get(source)
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error.message);
      });
  }
  render() {
    return (
      <Card>
        <img
          src="https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
          width="100%"
        />
        <Card.Content>
          <span>Hello</span>
        </Card.Content>
      </Card>
    );
  }
}

export default SourceList;
