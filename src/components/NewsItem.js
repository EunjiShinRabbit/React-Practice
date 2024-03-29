import styled from "styled-components";

const NewsItemBlock = styled.div`
  display: flex;
  .thumbnail{
    margin-right: 1em;
    img{
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }
  .content{
    h2{
      margin: 0;
      a{
        color: black;
      }
    }
    p{
      margin: 0;
      line-height: 1.5;
      margin-top: .5rem;
    }
    & + &{
      margin-top: 3rem;
    }
  }
`;
const NewsItem = ({article}) =>{
  const { title, description, url, urlToImage } = article; 
  return(
    // div태그 대신에 NewsItemBlock을 가져다씀
    <NewsItemBlock> 
      {/* 조건부 렌더링, 이미지가 있으면 렌더링 하겠다 */}
      {urlToImage && (
        <div className="thumbnail">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="thumbnail" />
          </a>
        </div>
      )} 
      <div className="contents">
				<h2>
					<a href={url} target="_blank" rel="noopener noreferrer">
						{title}
					</a>
				</h2>
				<p>{description}</p>
			</div>
    </NewsItemBlock>
  );
};

export default NewsItem;