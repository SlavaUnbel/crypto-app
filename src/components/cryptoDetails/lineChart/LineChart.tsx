import { Col, Row, Typography } from 'antd';
import React, { FC } from 'react';
import { Line } from 'react-chartjs-2';

const { Title } = Typography;

interface Props {
  coinHistory: any;
  currentPrice: string;
  coinName: string;
}

const LineChart: FC<Props> = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
    coinPrice.push(coinHistory.data.history[i].price);
    coinTimestamp.push(
      new Date(coinHistory.data.history[i].timestamp).toLocaleDateString()
    );
  }

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price in USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  const options = { elements: { point: { radius: 2 } } };

  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">
          {coinName} Price Chart
        </Title>

        <Col className="price-container">
          <Title level={5} className="price-change">
            Price Change: {coinHistory?.data?.change}
          </Title>

          <Title level={5} className="current-price">
            Current {coinName} Price: $ {currentPrice}
          </Title>
        </Col>
      </Row>

      {coinHistory && <Line data={data} options={options} />}
    </>
  );
};

export default LineChart;
