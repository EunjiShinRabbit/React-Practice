import { useState, useCallback } from 'react';
import NewsCategories from "../components/NewsCategories";
import NewsList from "../components/NewsList";
const News2 = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback(category => setCategory(category), []);

  return(
    <>
      <NewsCategories category={category} onSelect={onSelect}/>
      <NewsList category={category}/>
    </>
  );
};

export default News2;