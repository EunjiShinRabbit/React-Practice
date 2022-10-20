import styled,  { css } from "styled-components";
// import { NavLink } from "react-router-dom";해서 naviLink 해서
// to={c.name === 'all' ? '/' : `/${c.name}`} > 이런식으로 링크 주소 설정 가능
const categories = [
  {
    name: 'all',
    text: '전체보기'
  },
  {
    name: 'business',
    text: '비즈니스'
  },
  {
    name: 'entertainment',
    text: '엔터테인먼트'
  },
  {
    name: 'health',
    text: '건강'
  },
  {
    name: 'science',
    text: '과학'
  },
  {
    name: 'sport',
    text: '스포츠'
  },
  {
    name: 'technology',
    text: '기술'
  }
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Category = styled.div`
  font-size: 1.125rem;
  cursor: pointer; // 커서 스타일을 손가락 모양으로 변경
  white-space: pre;  // 공백이나 줄바꿈을 있는 그대로 표시
  text-decoration: none;
  color: inherit;   // 부모의 컬러값을 따름
  padding-bottom: 0.25rem;
  /* margin-right: 1rem; */

  &:hover {
    color:#05C7F2;
  }
  & + & {
    margin-left: 1rem;
  }
  ${(props) =>
    props.active &&
    css`
      font-weight: 600;
      border-bottom: 2px solid #22b8cf;
      color: #22b8cf;
      &:hover {
        color: #3bc9db;
      }
    `}
  
`;
const NewsCategories = ({onSelect, category}) => {
  return (
    <CategoriesBlock>
      {categories.map(c => (
        <Category key={c.name} active={category === c.name} onClick={() => onSelect(c.name)}>
          {c.text}</Category>
      ))}
    </CategoriesBlock>
  );
};

export default NewsCategories;