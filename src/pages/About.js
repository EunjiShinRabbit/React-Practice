import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터를 사용해 보는 페이지 1번 입니다</p>
      <Link to="/">홈</Link>
      <Link to="/setting">설정</Link>
    </div>
  )
}
export default About;