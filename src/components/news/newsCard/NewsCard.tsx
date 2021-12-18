import { Avatar, Card, Col, Typography } from 'antd';
import moment from 'moment';
import React, { FC } from 'react';

const { Title, Text } = Typography;

interface Props {
  news: any;
}

const NewsCard: FC<Props> = ({ news }) => {
  const demoImage =
    "http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg";

  return (
    <Col xs={24} sm={12} lg={8}>
      <Card hoverable className="news-card">
        <a href={news.url} target="_blank" rel="noreferrer">
          <div className="news-image-container">
            <Title level={4} className="news=title">
              {news.name}
            </Title>

            <img
              style={{ maxWidth: 200, maxHeight: 100 }}
              src={news?.image?.thumbnail?.contentUrl || demoImage}
              alt="news"
            />
          </div>

          <p>
            {news.description > 100
              ? `${news.description.substring(0, 100)}...`
              : news.description}
          </p>

          <div className="provider-container">
            <div>
              <Avatar
                src={
                  news.provider[0]?.image?.thumbnail?.contentUrl || demoImage
                }
                alt=""
              />

              <Text className="provider-name">{news.provider[0]?.name}</Text>
            </div>

            <Text>{moment(news.datePublished).startOf("s").fromNow()}</Text>
          </div>
        </a>
      </Card>
    </Col>
  );
};

export default NewsCard;
