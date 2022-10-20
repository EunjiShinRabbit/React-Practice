import { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3em;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    witdh: 100%;
    padding-left: 1em;
    padding-right:1em;
  }
`;

const NewsList = (props) => { // props는 부모가 넘겨줄것
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log(props);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // 분기를 해줘야함
        const query = props.category === 'all' ? 'all' : `category=${props.category}`;
        // ``백틱 안에도 문자열을 넣음, 카테고리가 all이 아니면 카테고리를 선택함
        // category라는 문자열에 props.category를 넣어줌
        const response = await axios.get(
          // "https://newsapi.org/v2/top-headlines?country=kr&apiKey=ffbbc82f694941a7b0e2d4f4515abcc7"
          `https://newsapi.org/v2/top-headlines?country=kr&${query}&apiKey=70655a846a354040855b7912aadee61a`,
        );
        console.log(response.data.articles);
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [props.category]);

  if(loading) {
    return <NewsListBlock>대기 중...</NewsListBlock>
  }
  if(!articles) return null;

  return(
    <NewsListBlock>
      {articles.map(article => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
}
export default NewsList;