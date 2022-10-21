import { Link } from "react-router-dom";
import writeIcon from "./logo192.png"
const Home = () => {
  return (
    <div>
      <h1>여기가 홈 입니다</h1>
      <p>가장 먼저 보여지는 페이지 입니다</p>
      <Link to="/about">소개</Link>
      <Link to="/setting">설정</Link>
      <Link to="/news">뉴스</Link>
      <Link to="/news2">뉴스(카테고리별)</Link>
      <div className="writebox">
        <input type="text" name="writename" className="writename" placeholder="글제목"/>
        <textarea name="writecontent" className="writecontent" placeholder="글내용"></textarea>
        <button>등록 <img src={writeIcon} alt="글쓰기아이콘"/></button>
      </div>
    </div>
  )
}
export default Home;