import {useState} from "react";

const EventInput = () =>{
  const [message, setMessage] = useState("안녕하세요");
  const changeMsg = (e) => {
    setMessage(e.target.value); 
    // 인풋으로 들어온 이벤트(e)가 발생핱 요소(target)의 값(value)을 읽어와서 message를 설정하라 
  }
  return(
    <div>
      <label for="message">이벤트</label>
      <input type="text" name="message" placeholder="아무거나 입력하세요" onChange={changeMsg}/>
      {/* 인풋창의 값이 바뀌는 이벤트는 onChange */}
      <h2>입력받은 메시지: {message}</h2>
    </div>
  );
};

export default EventInput;