import 'antd/dist/antd.css';

import { Chart, registerables } from 'chart.js';
import React, { FC, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Cryptocurrencies, CryptoDetails, Exchanges, Homepage, Layout, Navbar, News } from './components/components';

const App: FC = () => {
  Chart.register(...registerables);

  return (
    <div className="app">
      <Navbar />

      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/exchanges" element={<Exchanges />} />

          <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />

          <Route path="/crypto/:coinId" element={<CryptoDetails />} />

          <Route path="/news" element={<News />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
