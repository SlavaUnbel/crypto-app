import React, { FC, useEffect, useState } from 'react';

import { useGetCryptosQuery } from '../../services/cryptoAPI';
import CryptosList from './cryptosList/CryptosList';
import SearchCrypto from './searchCrypto/SearchCrypto';

interface Props {
  simplified?: boolean;
}

const Cryptocurrencies: FC<Props> = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data, isLoading } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setCryptos(
      data?.data?.coins?.filter((coin: any) =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [data, searchTerm]);

  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          {!simplified && <SearchCrypto setSearchTerm={setSearchTerm} />}

          <CryptosList cryptos={cryptos} simplified={simplified} />
        </>
      )}
    </>
  );
};

export default Cryptocurrencies;
