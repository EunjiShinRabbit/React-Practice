import {useReducer} from "react";

function reducer(state, action){ // 액션의 타입에 따라서 다른 작업 수행
  switch(action.type){
    case "INCREMENT":
      return {value: state.value + action.step};
    case "DECREMENT":
      return {value: state.value - 1};
    default:
      return state;
  }
}

const Counter = () =>{
  const [state, dispatch] = useReducer(reducer, {value:0})

  return(
    <div>
      <p>현재 카운터 값은 <b>{state.value}</b> 입니다</p>
      <button onClick={() => {dispatch({type:"INCREMENT", step: 2})}}>+2</button>
      <button onClick={() => {dispatch({type:"DECREMENT"})}}>-1</button>
    </div>
  );
};
/*
- useReducer의 **첫 번째 파라미터에는 리듀서 함수**를 넣고, 
**두 번째 파라미터에는 해당 리듀서의 기본값**을 넣어 줍니다.
- state는 현재 가리키고 있는 상태고, dispatch는 액션을 발생시키는 함수 입니다.
- useReducer를 사용했을 때 가장 큰 장점은 컴포넌트 업데이트 로직을 컴포넌트 바깥으로 빼낼 수 있습니다. */

export default Counter;