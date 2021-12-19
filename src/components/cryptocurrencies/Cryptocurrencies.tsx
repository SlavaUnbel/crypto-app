import React, { FC, useEffect, useState } from 'react';

import { useGetCryptosQuery } from '../../services/cryptoAPI';
import Loader from '../loader/Loader';
import CryptosList from './cryptosList/CryptosList';
import SearchCrypto from './searchCrypto/SearchCrypto';

interface Props {
  simplified?: boolean;
}

const Cryptocurrencies: FC<Props> = ({ simplified }) => {
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const count = simplified ? 10 : 100;
  const { data, isLoading } = useGetCryptosQuery(count);
  const coins = data?.data?.coins;

  useEffect(() => {
    !isLoading &&
      setCryptos(
        coins.filter((coin: any) =>
          coin.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
  }, [coins, isLoading, searchTerm]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {!simplified && <SearchCrypto setSearchTerm={setSearchTerm} />}

          <CryptosList cryptos={cryptos} />
        </>
      )}
    </>
  );
};

export default Cryptocurrencies;
