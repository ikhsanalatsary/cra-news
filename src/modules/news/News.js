// Component ini untuk menampilkan list Berita
// bisa random atau berdasarkan query / kategori sumber

import React from "react";
import axios from "axios";
import {
  Card,
  Dimmer,
  Icon,
  Image,
  Loader,
  Pagination,
  Segment
} from "semantic-ui-react";
import moment from "moment";
// import qs from "querystringify";

const apiKey = "0797e75da548421fb4847b975c3534b9";
const source = `https://newsapi.org/v2/everything?q=apple&from=2018-07-19&to=2018-07-19&sortBy=popularity&apiKey=${apiKey}`;

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
      error: null,
      total: 0,
      activePage: 1
    };
    this.handlePaginationChange = this.handlePaginationChange.bind(this);
    this.fetchNews = this.fetchNews.bind(this);
  }

  componentDidMount() {
    this.fetchNews();
  }

  fetchNews() {
    const { activePage: page } = this.state;
    axios
      .get(`${source}&page=${page}`)
      .then(result => {
        console.log(result);
        this.setState({
          data: result.data.articles,
          loading: false,
          total: result.data.totalResults
        });
      })
      .catch(error => {
        this.setState({
          error: error.message,
          loading: false
        });
      });
  }

  renderNews(article, i) {
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
              {moment(article.publishedAt).format("LL")}
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
  }

  handlePaginationChange(e, { activePage }) {
    this.setState({ activePage, loading: true }, this.fetchNews);
  }

  render() {
    // console.log(this.state);
    const { activePage, data, loading, error, total } = this.state;
    let content = null;
    if (loading) {
      content = (
        <Segment>
          <Dimmer inverted active>
            <Loader>Loading</Loader>
          </Dimmer>
          <Image src="https://rawgit.com/ikhsanalatsary/xcidic-news/8db843f7684624356510c7317d231124bd3dc5fe/src/modules/news/paragraph.png" />
        </Segment>
      );
    } else if (error) {
      content = <Segment>{error}</Segment>;
    } else {
      content = (
        <Card.Group stackable itemsPerRow={4} style={{ marginBottom: 15 }}>
          {data.map(this.renderNews)}
        </Card.Group>
      );
    }

    return (
      <React.Fragment>
        {content}
        <Pagination
          activePage={activePage}
          totalPages={total}
          onPageChange={this.handlePaginationChange}
        />
      </React.Fragment>
    );
  }
}

export default News;
