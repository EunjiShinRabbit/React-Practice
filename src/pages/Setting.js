import { Link } from "react-router-dom";
const Setting = () => {
  return (
    <div>
      <h1>설정</h1>
      <p>리액트 라우터를 사용해 보는 페이지 2번 입니다</p>
      <Link to="/">홈</Link>
      <Link to="/about">소개</Link>
    </div>
  )
}
export default Setting;