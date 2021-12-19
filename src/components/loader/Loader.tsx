import { Spin } from 'antd';
import React, { FC } from 'react';

const Loader: FC = () => (
  <div className="loader">
    <Spin />
  </div>
);

export default Loader;
