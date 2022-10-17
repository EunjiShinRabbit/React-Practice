import {useState} from "react";

const Event2 = () =>{
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const onChangeUsername = (e) => setUsername(e.target.value);
  const onChangeMessage = (e) => setUsername(e.target.value);
  const onClick = () =>{ // 경고창을 띄우고 값을 비워줌
    alert(username + " : " + message)
    setUsername('');
    setMessage('');
  };
  const onKeyPress = (e) => {
    if(e.key === "Enter") onClick();
  }

  return(
    <div>
      <h1>이벤트 연습 2</h1>
      <label for="username">사용자명</label>
      <input type="text" name="username" placeholder="사용자명을 입력하세요" value={username} 
      onChange={onChangeUsername}/>
      <br/>
      <label for="message">메시지</label>
      <input type="text" name="message" placeholder="메시지를 입력하세요" value={message} 
      onChange={onChangeMessage} onKeyPress={onKeyPress}/>
      <button onClick={onClick}>버튼</button>
    </div>
  );
};

export default Event2;