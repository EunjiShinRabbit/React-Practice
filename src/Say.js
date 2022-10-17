import {useState} from 'react';

const Say = () =>{
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage("안녕하세요!!");
  const onClickLeave = () => setMessage("안녕히 가세요!!");
  const [color, setColor] = useState('black');

  let prnMsg = "없음";
  const testClick = () => {
    prnMsg = "어서오세요"; // 값은 바뀌어도 렌더링 새로 되지않으면 계속 화면애는 없음이 뜸!!!
    console.log(prnMsg);
  }
  return(
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <button onClick={testClick}>테스트</button>
      <h1 style={{color}}>{message}</h1>
      <button style={{color:'red'}} onClick={()=>setColor('red')}>빨간색</button>
      <button style={{color:'green'}} onClick={()=>setColor('green')}>초록색</button>
      <button style={{color:'blue'}} onClick={()=>setColor('blue')}>파란색</button>
    </div>
  );
}
export default Say;