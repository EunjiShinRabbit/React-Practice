// 배열로 화면에 뿌려주는 방법 - 쉬운방법, 멍청한 방법, 하드코딩해서 넣기
const Arrlist = () =>{
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

  return(
    <div>
      <div><b>{users[0].userName}</b><span>{users[0].email}</span></div>
      <div><b>{users[1].userName}</b><span>{users[1].email}</span></div>
      <div><b>{users[2].userName}</b><span>{users[2].email}</span></div>
    </div>
  );
};

export default Arrlist;