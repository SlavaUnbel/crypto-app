import { UpOutlined } from '@ant-design/icons';
import React, { FC } from 'react';

const ScrollTop: FC = () => {
  return (
    <div className="scroll-top">
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <UpOutlined />
      </button>
    </div>
  );
};

export default ScrollTop;
