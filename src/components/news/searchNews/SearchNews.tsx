import { Col, Select } from 'antd';
import React, { FC } from 'react';

import { useGetCryptosQuery } from '../../../services/cryptoAPI';

const { Option } = Select;

interface Props {
  changeCategory: (category: string) => void;
}

const SearchNews: FC<Props> = ({ changeCategory }) => {
  const { data: cryptos } = useGetCryptosQuery(100);

  return (
    <Col span={24}>
      <Select
        showSearch
        className="select-news"
        placeholder="Select a Crypto"
        optionFilterProp="children"
        onChange={(value: string) => changeCategory(value)}
        filterOption={(input, option) =>
          option?.options.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        <Option value="Cryptocurrency">Cryptocurrency</Option>

        {cryptos?.data?.coins?.map((coin: any) => (
          <Option value={coin.name}>{coin.name}</Option>
        ))}
      </Select>
    </Col>
  );
};

export default SearchNews;
