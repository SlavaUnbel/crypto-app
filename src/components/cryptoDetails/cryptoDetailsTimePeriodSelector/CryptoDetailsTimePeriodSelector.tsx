import { Select } from 'antd';
import React, { FC } from 'react';

const { Option } = Select;

interface Props {
  setTimePeriod: (period: string) => void;
}

const CryptoDetailsTimePeriodSelector: FC<Props> = ({ setTimePeriod }) => {
  const timePeriods = ["24h", "7d", "30d", "1y", "5y"];

  return (
    <Select
      defaultValue="7d"
      className="select-timeperiod"
      placeholder="Select Time Period"
      onChange={(value) => setTimePeriod(value)}
    >
      {timePeriods.map((period) => (
        <Option value={period} key={period}>
          {period}
        </Option>
      ))}
    </Select>
  );
};

export default CryptoDetailsTimePeriodSelector;
