import {useState, useMemo, useCallback, useRef} from "react";

const getAverage = (numbers) =>{ 
  // state가 바뀔때마다 호출되는 것이 아닌 등록할때만 호출되도록 해야함 -> useMomo 사용
  console.log("평균 계산중...")
  if(numbers.length === 0 ) return 0;
  // reduce: 배열의 각 요소를 순회하며 callback 함수의 실행 값을 누적하여 하나의 결과값을 반환
  const sum = numbers.reduce((a,b)=> a+b);
  return sum / numbers.length;
};
const Average = ()=>{
  const [list, setList] = useState([]);
  const [number, setNumber] = useState(0);
  const inputElement = useRef(null);

  const onChange = useCallback((e) =>{ // useCallback(함수,[])로 변경하면 처음 렌더링될때만 호출
    setNumber(e.target.value);
  }, []);

  const onInsert = useCallback(() =>{
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
    // 등록버튼을 누르면 ref={inputElement} 속성을 준 곳(현재 코드에서는 input창)에 포커스를 잡음
    inputElement.current.focus();
  }, [number, list]);

  // 첫번째는 콜백 함수(내가 호출해야할 함수), 두번째 인자는 해당 배열(의존성배열)
  const avg = useMemo(() => getAverage(list), [list]); // 의존성배열

  return(
    <div>
      <input value={number} onChange={onChange} ref={inputElement}/>
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((e, index) => <li key={index}>{e}</li>)}
      </ul>
      <p><b>평균값: </b>{avg}</p>
    </div>
  );
};
export default Average;