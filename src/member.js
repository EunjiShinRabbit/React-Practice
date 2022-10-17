import "./Sample.css"

const member = {
  name: "애옹이",
  job: "Developer",
  addr: "경기도 고양이시",
  gender: "여성"
};

function getGreeting(user) {
  if(user) {
    return <h1>환영합니다. {member.name}님</h1>
  } 
  return <h1>환영 합니다. 방문자님...</h1>
}

function MemberInfo() {
  return(
    <div className="App">
      <p className="titleName">안녕하세요 {member.name}입니다</p>
      <p className="titleName">직업은 {member.job}입니다</p>
      <p className="titleName">주소는 {member.addr}입니다</p>
      <p className="titleName">성별은 {member.gender}입니다</p>
      <div>{getGreeting(true)}</div>
    </div>
  );
}

export default MemberInfo;