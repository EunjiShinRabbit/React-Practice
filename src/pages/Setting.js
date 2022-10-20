import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

// 회원정보를 저장할 수 있는 리터럴 객체 만듦
const memberObj = {
  id: "",
  pwd: "",
  name: "",
  addr: "",
  mail: "",
  phone: ""
};
const Setting = () => {
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');
  const [name, setName] = useState('');
  const [addr, setAddr] = useState('');
  const [mail, setMail] = useState('');
  const [phone, setPhone] = useState('');

  const [submit, setSubmit] = useState(false); // 서버로 전송할 수 있는 조건 체크
  const [resData, setResData] = useState(''); // 서버로부터 받는 결과 데이터(response)

  // 이벤트 체크 함수
  const onChangeId = (e) =>setId(e.target.value); // 현재 이벤트가 발생한 입력창의 값을 useState에 저장
  const onChangePwd = (e) =>setPwd(e.target.value);
  const onChangeName = (e) =>setName(e.target.value);
  const onChangeAddr = (e) =>setAddr(e.target.value);
  const onChangeMail = (e) =>setMail(e.target.value);
  const onChangePhone = (e) =>{
    setPhone(e.target.value); 
    isSubmit(); // 일단은 순서대로 입력한다고 생각하고 마지막항목에서만 조건 체크
  }

  const isSubmit = () => {
    if(id && pwd && name && addr && mail && phone) setSubmit(true);
  } 
  
  const onSubmit = async () => { // 제출(전송) 버튼이 눌러지면 동작하는 함수
    // 비동기 동작을 위해 async를 붙여줌, axios도 원래 비동기로 동작하지만
    // 좀더 깔끔하게 동작하기 위해 함수에도 async 처리
    memberObj.id = id; // useState로 만들어진 값을 객체에 넣음
    memberObj.pwd = pwd;
    memberObj.name = name;
    memberObj.addr = addr;
    memberObj.mail = mail;
    memberObj.phone = phone;
    console.log(memberObj);
    //let objectJson = JSON.parse(memberObj);
    try { // 서버에 날려주기 위해 try-catch 문으로 묶음
      // 서버에 대한 요청을 비동기로 처리 await 
      // localhost에 가상 서버를 띄워서 예제 진행, 원래는 자바 서버를 만들어서 돌려야함
      const res = await axios.post("http://localhost:3000/posts", memberObj, 'application/json');
      setResData(res.data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <h1>설정</h1>
      <Link to="/">홈</Link>
      <br />
      <input type="text" placeholder='아이디 입력' value={id} onChange={onChangeId} />
      <br />
      <input type="password" placeholder='패스워드 입력' value={pwd} onChange={onChangePwd} />
      <br />
      <input type="text" placeholder='이름 입력' value={name} onChange={onChangeName} />
      <br />
      <input type="text" placeholder='주소 입력' value={addr} onChange={onChangeAddr} />
      <br />
      <input type="email" placeholder='메일 입력' value={mail} onChange={onChangeMail} />
      <br />
      <input type="tel" placeholder='전화 입력' value={phone} onChange={onChangePhone} />
      <br />
      {submit && <button onClick={onSubmit}>전송</button>}
      {resData && <textarea rows={7} value={JSON.stringify(resData, null, 2)} readOnly={true} />}
    </div>
  );
}

export default Setting;