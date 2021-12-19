import { Col, Row, Typography } from 'antd';
import HTMLReactParser from 'html-react-parser';
import React, { FC } from 'react';

const { Title } = Typography;

interface Props {
  details: any;
}

const CryptoDetailsDescription: FC<Props> = ({ details }) => {
  return (
    <Col className="coin-desc-link">
      <Row className="coin-desc">
        <Title level={3} className="coin-details-heading">
          What is {details.name}?
        </Title>

        {HTMLReactParser(details.description)}
      </Row>

      <Col className="coin-links">
        <Title level={3} className="coin-details-heading">
          {details.name} Links
        </Title>

        {details.links?.map((link: any) => (
          <Row className="coin-link" key={link.name}>
            <Title level={5} className="link-name">
              {link.type}
            </Title>

            <a href={link.url} target="_blank" rel="noreferrer">
              {link.name}
            </a>
          </Row>
        ))}
      </Col>
    </Col>
  );
};

export default CryptoDetailsDescription;
