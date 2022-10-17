import {useState} from "react";

// 이름, 직책, 회사명, 회사주소, 이메일, 전화번호를 입력 받아 명함 형태로 출력
const NameCard = () =>{
  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const [company, setCompany] = useState('');
  const [addr, setAddr] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const onChangeName = e => setName(e.target.value);
  const onChangeJob = e => setJob(e.target.value);
  const onChangeCompany = e => setCompany(e.target.value);
  const onChangeAddr = e => setAddr(e.target.value);
  const onChangeEmail = e => setEmail(e.target.value);
  const onChangePhone = e => setPhone(e.target.value);

  const [nameCard, setNameCard] = useState('');
  const onClick = () =>{
    setNameCard(
      <div>
        <p>이름: {name}</p>
        <p>직책: {job}</p>
        <p>회사명: {company}</p>
        <p>회사주소: {addr}</p>
        <p>이메일: {email}</p>
        <p>전화번호: {phone}</p>
      </div>
    );
  };
  
  return(
    <div>
      <label for="name">이름</label>
      <input name="name" value={name} onChange={onChangeName}/><br/>
      <label for="job">직책</label>
      <input name="job" value={job} onChange={onChangeJob}/><br/>
      <label for="company">회사명</label>
      <input name="company" value={company} onChange={onChangeCompany}/><br/>
      <label for="addr">회사주소</label>
      <input name="addr" value={addr} onChange={onChangeAddr}/><br/>
      <label for="email">이메일</label>
      <input name="email" value={email} onChange={onChangeEmail}/><br/>
      <label for="phone">전화번호</label>
      <input name="phone" value={phone} onChange={onChangePhone}/><br/>
      <button onClick={onClick}>명함 출력</button>
      {nameCard}
    </div>
  );
};

export default NameCard;