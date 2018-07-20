import React from "react";
import axios from "axios";
import { Card, Icon, Image } from "semantic-ui-react";
import PropTypes from "prop-types";
import moment from "moment";

export default class NewsItem extends React.Component {
  render() {
    const { article } = this.props;
    return (
      <Card>
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
}

NewsItem.propTypes = {
  article: PropTypes.object
};
