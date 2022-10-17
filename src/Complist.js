// 컴포넌트를 만들고 props로 전달하기
const User = (props) =>{ // 함수처럼 보이지만 대문자로 시작하므로 컴포넌트임
  return(
    <div><b>{props.user.userName}</b><span>{props.user.email}</span></div>
  );
};

const Complist = () =>{
  const users = [
    {
      id: 100,
      userName: "애옹이",
      email:"cat11@gmail.com"
    },
    {
      id: 101,
      userName: "폭신이",
      email:"fox22@gmail.com"
    },
    {
      id: 999,
      userName: "관리자",
      email:"admin@gmail.com"
    }
  ];

  return( // 그래도 배열의 갯수가 몇개인지 알아야 하는 단점이 있다
    <div>
      {/* User 이라는 자식 컴포넌트를 불러서 props 매개변수를 넘겨줌 */}
      <User user={users[0]}/>
      <User user={users[1]}/>
      <User user={users[2]}/>
    </div>
  );
};

export default Complist;