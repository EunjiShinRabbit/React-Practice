import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components';
import NewsItem from "../components/NewsItem";

// const News = () =>{ // 엑시오스로 데이터 가져오기
//   const [data, setData] = useState('');
//   const onClick = async () => {
//     try {
//       const response = await axios.get(
//         "https://newsapi.org/v2/top-headlines?country=kr&apiKey=ffbbc82f694941a7b0e2d4f4515abcc7",
//       );
//       setData(response.data);
//     } catch (e) {
//       console.log(e);
//     }
//   };
//   return(
//     <div>
//       <div>
//         <button onClick={onClick}>불러오기</button>
//       </div>
//       {/* data&&은 데이터가 있으면(데이터가 들어오면) 이라는 의미! */}
//       {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
//       <div>
//         <Link to="/">홈</Link>
//       </div>
//     </div>
    
//   );
// };

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    witdh: 100%;
    padding-left: 1rem;
    padding-right:1rem;
  }
`;
// 스타일 확인 테스트용 데이터
// const sampleArticle = {
//   title: "제목",
//   description: "내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용",
//   url: "http://google.com",
//   urlToImage: "https://assets.reedpopcdn.com/-1648039850821.jpg/BROK/thumbnail/1600x900/format/jpg/quality/80/-1648039850821.jpg"
// }

const News = () => {
  const [articles, setArticles] = useState('');
  const [loading, setLoading] = useState(false);

  // 화면 로딩될때만 업데이트하고 동작중에 업데이트 하지 않음
  useEffect(() =>{ // useEffect 자체에 async를 붙일수는 없고, 내부에 async, await 함수를 만들어야함
    const fetchData = async () =>{ // 비동기적으로 동작하려면 async 붙여서 비동기 함수로 만듦
      setLoading(true); // 회면이 로딩중임을 표시
      try{ // 서버에 대한 요청 시도
        const response = await axios.get("https://newsapi.org/v2/top-headlines?country=kr&apiKey=ffbbc82f694941a7b0e2d4f4515abcc7");
        setArticles(response.data.articles);
        console.log(articles);
      } catch(e){ // 서버 요청이 실패함
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if(loading) {
    return <NewsListBlock>대기 중...</NewsListBlock>
  }
  if(!articles) return null; // 초기상태  또는 아무 정보 없을때는 그려주면 안됨!

  return(
    <div>
      <NewsListBlock>
        {/* <NewsItem article={sampleArticle} /> */}
        {articles.map(article => (
          <NewsItem key={article.url} article={article} />
        ))}
      </NewsListBlock>
      <Link to="/">홈</Link>
    </div>
    
  );
}
export default News;