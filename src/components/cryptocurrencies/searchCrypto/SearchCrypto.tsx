import { Input } from 'antd';
import React, { FC } from 'react';

interface Props {
  setSearchTerm: (term: string) => void;
}

const SearchCrypto: FC<Props> = ({ setSearchTerm }) => {
  return (
    <div className="search-crypto">
      <Input
        placeholder="Search A Cyptocurrency"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchCrypto;
