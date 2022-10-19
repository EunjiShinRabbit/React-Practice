import {useState, useEffect} from "react";

const Info = () =>{
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  useEffect(()=>{
    console.log("rendering complete...")
    console.log({name, nickname})
  });
  const onChangeName = (e) =>{
    setName(e.target.value);
  };
  const onChangeNickname = (e) =>{
    setNickname(e.target.value);
  };

  return(
    <div>
      <label htmlFor="name">이름</label>
      <input name="name" value={name} onChange={onChangeName}/><br/>
      <label htmlFor="nickname">닉네임</label>
      <input name="nickname" value={nickname} onChange={onChangeNickname}/><br/>
      <b>이름: </b>{name}<b> 닉네임: </b>{nickname}
    </div>
  );
};

export default Info;