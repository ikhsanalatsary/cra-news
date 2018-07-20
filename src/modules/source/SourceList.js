// Component ini untuk menampilkan list Sumber Berita
// Seperti CNN, BBC dan lain-lain

import React from "react";
import { Card, Dimmer, Image, Loader, Segment } from "semantic-ui-react";
import axios from "axios";

const key = "790d923c2bc14b1e85ddbaa3788f7dea";
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
      loading: false,
      error: null
    };
  }

  componentDidMount() {
    axios
      .get(source)
      .then(result => {
        this.setState({
          data: result.data.sources
        });
      })
      .catch(error => {
        this.setState({
          error: error.message
        });
      });
  }

  render() {
    const { data, loading, error } = this.state;
    if (loading) {
      return (
        <Segment>
          <Dimmer active>
            <Loader>Loading</Loader>
          </Dimmer>
        </Segment>
      );
    } else if (error) {
      return <Segment>{error}</Segment>;
    }
    return (
      <Card.Group stackable itemsPerRow={4}>
        {data.map(source => {
          return (
            <Card>
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
