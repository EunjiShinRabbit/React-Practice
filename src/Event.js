// 이벤트 핸들링, 이벤트 관련은 따로 import 할 것 없음
import {useState} from "react";

const Event = () =>{
  const [message, setMessage] = useState(''); // 초기값을 null로 넣음
  const [color, setColor] = useState("black");
  const onClickEnter = () =>{
    setMessage("안녕하세요!")
  }; // onClickEnter 이벤트 발생시 호출될 함수, 함수 body가 한줄이므로 한줄로 축약해서 작성 가능
  const onClickLeave = () => {setMessage("안녕히가세요!!")};

  return( // 화면에 그려지는 렌더링 부분
    <div>
      {/* <button onClick="onClickEnter()">입장</button> 자바스크립트, HTML식 문법*/}
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{color}}>{message}</h1>
      <button style={{color: "pink"}} onClick={()=>setColor("pink")}>분홍</button>
      <button style={{color: "skyblue"}} onClick={()=>setColor("skyblue")}>하늘</button>
      <button style={{color: "yellow"}} onClick={()=>setColor("yellow")}>노랑</button>
    </div>
  );
}

export default Event;