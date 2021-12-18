import { Typography } from 'antd';
import React, { FC } from 'react';

import { useGetCryptosQuery } from '../../services/cryptoAPI';
import { Cryptocurrencies, News } from '../components';
import HomeHeading from './homeHeading/HomeHeading';
import Statistics from './statistics/Statistics';

const { Title } = Typography;

const Homepage: FC = () => {
  const { isLoading } = useGetCryptosQuery(10);

  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          <Title level={2} className="heading">
            Global Crypto Stats
          </Title>

          <Statistics />

          <HomeHeading
            heading="Top 10 Cryptocurrencies in the world"
            route="/cryptocurrencies"
          />
          <Cryptocurrencies simplified />

          <HomeHeading heading="Latest Crypto News" route="/news" />
          <News />
        </>
      )}
    </>
  );
};

export default Homepage;
