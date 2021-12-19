import { Typography } from 'antd';
import React, { FC } from 'react';

import { useGetCryptosQuery } from '../../services/cryptoAPI';
import { Cryptocurrencies, News } from '../components';
import Loader from '../loader/Loader';
import HomeHeading from './homeHeading/HomeHeading';
import Statistics from './statistics/Statistics';

const { Title } = Typography;

const Homepage: FC = () => {
  const { data, isLoading } = useGetCryptosQuery(10);
  const stats = data?.data?.stats;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Title level={2} className="heading">
            Global Crypto Stats
          </Title>

          <Statistics stats={stats} isLoading={isLoading} />

          <HomeHeading
            heading="Top 10 Cryptocurrencies in the world"
            route="/cryptocurrencies"
          />
          <Cryptocurrencies simplified />

          <HomeHeading heading="Latest Crypto News" route="/news" />
          <News simplified />
        </>
      )}
    </>
  );
};

export default Homepage;
