import 'antd/dist/antd.css';

import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Cryptocurrencies, CryptoDetails, Exchanges, Homepage, Layout, Navbar, News } from './components/components';
import { routes } from './utils/contants';

const App: FC = () => (
  <div className="app">
    <Navbar />

    <Layout>
      <Routes>
        <Route path={routes.home} element={<Homepage />} />

        <Route path={routes.exchanges} element={<Exchanges />} />

        <Route path={routes.cryptos} element={<Cryptocurrencies />} />

        <Route path={routes.cryptoDetails} element={<CryptoDetails />} />

        <Route path={routes.news} element={<News />} />
      </Routes>
    </Layout>
  </div>
);

export default App;
