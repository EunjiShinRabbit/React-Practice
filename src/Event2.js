import {useState} from "react";

const Event2 = () =>{
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const onChangeUsername = (e) => setUsername(e.target.value);
  const onChangeMessage = (e) => setMessage(e.target.value);
  const onClick = () =>{ // 경고창을 띄우고 값을 비워줌
    alert(username + " : " + message)
    setUsername('');
    setMessage('');
  };
  const onKeyPress = (e) => {
    if(e.key === "Enter") onClick();
  }

  const [fruit, setFruit] = useState('banana');
  const handleChange = (e) =>{
    setFruit(e.target.value);
  };
  const handleSubmit = (e) =>{
    alert("선택한 과일 : "+ fruit);
    e.preventDefault(); // 창이 새로고침되는 것을 막음
  };

  return(
    <div>
      <h1>input 이벤트 연습</h1>
      <label for="username">사용자명</label>
      <input type="text" name="username" placeholder="사용자명을 입력하세요" value={username} 
      onChange={onChangeUsername}/>
      <br/>
      <label for="message">메시지</label>
      <input type="text" name="message" placeholder="메시지를 입력하세요" value={message} 
      onChange={onChangeMessage} onKeyPress={onKeyPress}/>
      <button onClick={onClick}>버튼</button>

      <h1> select, option 이벤트 연습</h1>
      <form onSubmit={handleSubmit}>
        <label for="fruit">과일</label>
        <select value={fruit} onChange={handleChange}>
          <option value="apple">사과</option>
          <option value="grape">포도</option>
          <option value="banana" selected>바나나</option>
          <option value="melon">멜론</option>
        </select>
        <button type="submit">제출</button>
      </form>
    </div>
  );
};

export default Event2;