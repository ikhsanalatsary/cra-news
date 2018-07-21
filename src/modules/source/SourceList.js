// Component ini untuk menampilkan list Sumber Berita
// Seperti CNN, BBC dan lain-lain

import React from "react";
import { Card, Dimmer, Image, Loader, Segment } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./SourceList.css";

const key = "e859950d43bc4623875f34a9361a0e24";
const source = `https://newsapi.org/v2/sources?apiKey=${key}`;

/** TODO:
 * membuat basic component `Card`.
 * request data dari newsapi.org
 * kemudian update komponen dengan data yang sudah didapat
 * bagaimana cara update componnt kita?
 */
class SourceList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    axios
      .get(source)
      .then(result => {
        console.log(result);
        this.setState({
          data: result.data.sources,
          loading: false
        });
      })
      .catch(error => {
        this.setState({
          error: error.message,
          loading: false
        });
      });
  }

  render() {
    const { data, loading, error } = this.state;
    if (loading) {
      return (
        <Segment>
          <Dimmer inverted active>
            <Loader>Loading</Loader>
          </Dimmer>
          <Image src="https://rawgit.com/ikhsanalatsary/xcidic-news/8db843f7684624356510c7317d231124bd3dc5fe/src/modules/news/paragraph.png" />
        </Segment>
      );
    } else if (error) {
      return <Segment>{error}</Segment>;
    }
    return (
      <Card.Group stackable itemsPerRow={4} className="wrapper">
        {data.map(source => {
          return (
            <Card key={source.id} as={Link} to={`/source/${source.id}`}>
              <img
                src="https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
                width="100%"
                alt="placeholder"
              />
              <Card.Content>
                <Card.Description>{source.name}</Card.Description>
              </Card.Content>
            </Card>
          );
        })}
      </Card.Group>
    );
  }
}

export default SourceList;
