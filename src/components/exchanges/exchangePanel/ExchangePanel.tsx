import { Avatar, Col, Collapse, Row, Typography } from 'antd';
import HTMLReactParser from 'html-react-parser';
import React, { FC } from 'react';

import { millifyHoc } from '../../../app/utils';

const { Text } = Typography;
const { Panel } = Collapse;

interface Props {
  exchange: any;
}

const ExchangePanel: FC<Props> = ({ exchange }) => (
  <Col span={24}>
    <Collapse>
      <Panel
        key={exchange.id}
        showArrow={false}
        header={
          <Row key={exchange.id} style={{ width: "100%" }}>
            <Col span={6}>
              <Text>
                <strong>{exchange.rank}.</strong>
              </Text>
              <Avatar className="exchange-image" src={exchange.iconUrl} />
              <Text>
                <strong>{exchange.name}</strong>
              </Text>
            </Col>

            <Col span={6}>${millifyHoc(exchange.volume)}</Col>

            <Col span={6}>{millifyHoc(exchange.numberOfMarkets)}</Col>

            <Col span={6}>{millifyHoc(exchange.marketShare)}%</Col>
          </Row>
        }
      >
        {HTMLReactParser(exchange.description || "")}
      </Panel>
    </Collapse>
  </Col>
);

export default ExchangePanel;
