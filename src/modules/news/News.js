// Component ini untuk menampilkan list Berita
// bisa random atau berdasarkan query / kategori sumber

import React from "react";
import axios from "axios";
import { Card, Dimmer, Icon, Image, Loader, Segment } from "semantic-ui-react";
// import qs from "querystringify";

const apiKey = "a72e90d6a98d4bb8b8f2b1c41af558a2";
const source = `https://newsapi.org/v2/top-headlines?country=id&apiKey=${apiKey}`;

/** TODO:
 * membuat basic component `Card`.
 * request data dari newsapi.org
 * kemudian update komponen dengan data yang sudah didapat
 * pagination feature
 */
class News extends React.Component {
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
        // console.log(result);
        this.setState({
          data: result.data.articles,
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
    // console.log(this.state);
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
        {data.map((article, i) => {
          return (
            <Card key={i}>
              <Image
                src={
                  article.urlToImage ||
                  "https://rawgit.com/ikhsanalatsary/xcidic-news/8db843f7684624356510c7317d231124bd3dc5fe/src/modules/news/image.png"
                }
              />
              <Card.Content>
                <Card.Header>{article.title}</Card.Header>
                <Card.Meta>
                  <span className="date">
                    {article.publishedAt.toLocaleString()}
                  </span>
                </Card.Meta>
                <Card.Description>{article.description}</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Icon name="user" />
                {article.author || "None"}
              </Card.Content>
            </Card>
          );
        })}
      </Card.Group>
    );
  }
}

export default News;
