import { Row } from 'antd';
import React, { FC, useEffect, useState } from 'react';

import { useGetCryptoNewsQuery } from '../../services/cryptoNewsAPI';
import NewsCard from './newsCard/NewsCard';
import SearchNews from './searchNews/SearchNews';

interface Props {
  simplified?: boolean;
}

const News: FC<Props> = ({ simplified }) => {
  const [newsData, setNews] = useState([]);
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");

  const { data, isLoading } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 6 : 12,
  });

  useEffect(() => {
    !isLoading && setNews(data?.value);
  }, [data, isLoading, setNews]);

  return (
    <>
      {!newsData || isLoading ? (
        "Loading..."
      ) : (
        <Row gutter={[24, 24]}>
          {!simplified && <SearchNews changeCategory={setNewsCategory} />}

          {newsData?.map((news: any, i: number) => (
            <NewsCard key={i} news={news} />
          ))}
        </Row>
      )}
    </>
  );
};

export default News;
