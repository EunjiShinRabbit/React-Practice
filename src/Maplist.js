/*자바스크립트 배열의 map() 함수
자바스크립트 배열의 객체의 내장 함수인 map 함수를 사용하여 반복되는 컴포넌트를 렌더링 할 수 있음
map 함수는 파라미터로 전달된 함수를 사용해서 배열 내 각 요소를 원하는 규칙에 따라 변환한 후 
그 결과로 새로운 배열을 생성 */
import {useState} from "react";
// const Maplist = () =>{
  // const users = [
  //   {
  //     id: 100,
  //     userName: "애옹이",
  //     email:"cat11@gmail.com"
  //   },
  //   {
  //     id: 101,
  //     userName: "폭신이",
  //     email:"fox22@gmail.com"
  //   },
  //   {
  //     id: 999,
  //     userName: "관리자",
  //     email:"admin@gmail.com"
  //   }
  // ];
  // let userInfo = users.map(e => <div key={e.id}><b>{e.userName}</b><span>{e.email}</span></div>);
  // return userInfo;   
// };
const Maplist = () => {
  const [names, setNames] = useState([
      {id: 1, text: "고양이"},
      {id: 2, text: "토끼"},
      {id: 3, text: "강아지"},
      {id: 4, text: "다람쥐"}
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5); 

  const onChange = e => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText('');
  };

  const onRemove = id =>{
    const nextNames = names.filter(name => name.id !== id);
    setNames(nextNames);
  }

  const namesList = names.map(name => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>{name.text}</li>
  ));

  const onKeyPress = (e) =>{
    if(e.key === "Enter") onClick();
  };
  return (
    <div>
      <input value={inputText} onChange={onChange} onKeyPress={onKeyPress}/>
      <button onClick={onClick}>추가</button>
      <ul>{namesList}</ul>
    </div>
  );    
};

export default Maplist;