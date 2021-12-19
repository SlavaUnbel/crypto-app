import {
  CheckOutlined,
  DollarCircleOutlined,
  ExclamationCircleOutlined,
  FundOutlined,
  MoneyCollectOutlined,
  NumberOutlined,
  StopOutlined,
  ThunderboltOutlined,
  TrophyOutlined,
} from '@ant-design/icons';
import { Col, Typography } from 'antd';
import React, { FC } from 'react';

import { millifyHoc } from '../../../app/utils';

const { Title, Text } = Typography;

interface Props {
  details: any;
  isLoading: boolean;
}

const CryptoDetailsStats: FC<Props> = ({ details, isLoading }) => {
  const stats = [
    {
      title: "Price to USD",
      value: `$ ${!isLoading && millifyHoc(details.price)}`,
      icon: <DollarCircleOutlined />,
    },
    { title: "Rank", value: details.rank, icon: <NumberOutlined /> },
    {
      title: "24h Volume",
      value: `$ ${!isLoading && millifyHoc(details.volume)}`,
      icon: <ThunderboltOutlined />,
    },
    {
      title: "Market Cap",
      value: `$ ${!isLoading && millifyHoc(details.marketCap)}`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${!isLoading && millifyHoc(details.allTimeHigh.price)}`,
      icon: <TrophyOutlined />,
    },
  ];

  const genericStats = [
    {
      title: "Number Of Markets",
      value: details.numberOfMarkets,
      icon: <FundOutlined />,
    },
    {
      title: "Number Of Exchanges",
      value: details.numberOfExchanges,
      icon: <MoneyCollectOutlined />,
    },
    {
      title: "Aprroved Supply",
      value: details.approvedSupply ? <CheckOutlined /> : <StopOutlined />,
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Total Supply",
      value: `$ ${!isLoading && millifyHoc(details.totalSupply)}`,
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${!isLoading && millifyHoc(details.circulatingSupply)}`,
      icon: <ExclamationCircleOutlined />,
    },
  ];

  return (
    <Col className="stats-container">
      <Col className="coin-value-statistics">
        <Col className="coin-value-statistics-heading">
          <Title level={3} className="coin-details-heading">
            {details.name} Value Statistics
          </Title>

          <p>
            An overview showing the statistics of {details.name}, such as the
            base and quote currency, the rank, and trading volume.
          </p>
        </Col>

        {stats.map(({ icon, title, value }) => (
          <Col className="coin-stats" key={title}>
            <Col className="coin-stats-name">
              <Text>{icon}</Text>

              <Text>{title}</Text>
            </Col>

            <Text className="stats">{value}</Text>
          </Col>
        ))}
      </Col>

      <Col className="other-stats-info">
        <Col className="coin-value-statistics-heading">
          <Title level={3} className="coin-details-heading">
            Other Stats Info
          </Title>

          <p>
            An overview showing the statistics of {details.name}, such as the
            number of markets, exchanges and the info about the coin supply.
          </p>
        </Col>

        {genericStats.map(({ icon, title, value }) => (
          <Col className="coin-stats" key={title}>
            <Col className="coin-stats-name">
              <Text>{icon}</Text>

              <Text>{title}</Text>
            </Col>

            <Text className="stats">{value}</Text>
          </Col>
        ))}
      </Col>
    </Col>
  );
};

export default CryptoDetailsStats;
