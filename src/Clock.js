import {useState} from 'react';
// /* 1. `<Clock />`가 `root.render()`로 전달되었을 때 React는 `Clock` 컴포넌트의 constructor를 호출
//  `Clock`이 현재 시각을 표시해야 하기 때문에 현재 시각이 포함된 객체로 `this.state`를 초기화
//  나중에 이 state를 업데이트할 것
// 2. React는 `Clock` 컴포넌트의 `render()` 메서드를 호출
//  이를 통해 React는 화면에 표시되어야 할 내용을 알게됨
//  그 다음 React는 `Clock`의 렌더링 출력값을 일치시키기 위해 DOM을 업데이트
// 3. `Clock` 출력값이 DOM에 삽입되면, React는 `componentDidMount()` 생명주기 메서드를 호출 
// 그 안에서 `Clock` 컴포넌트는 매초 컴포넌트의 `tick()` 메서드를 호출하기 위한 타이머를 설정하도록 
// 브라우저에 요청합
// 4. 매초 브라우저가 `tick()` 메서드를 호출 
// 그 안에서 `Clock` 컴포넌트는 `setState()`에 현재 시각을 포함하는 객체를 호출하면서
//  UI 업데이트를 진행 `setState()` 호출 덕분에 React는 state가 변경된 것을 인지하고 
//  화면에 표시될 내용을 알아내기 위해 `render()` 메서드를 다시 호출 
//  이 때 `render()` 메서드 안의 `this.state.date`가 달라지고 렌더링 출력값은 업데이트된 시각을 포함
//  React는 이에 따라 DOM을 업데이트
// 5. `Clock` 컴포넌트가 DOM으로부터 한 번이라도 삭제된 적이 있다면 React는 타이머를 멈추기 위해 
// `componentWillUnmount()` 생명주기 메서드를 호출합니다.*/

const Clock = () => {

  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());
  }
  setInterval(tick, 1000);

  return(
    <div>
      <p>Time</p>
      <p>{date.toLocaleTimeString()}</p>
    </div>
  );
}

// import {Component} from 'react';

// class Clock extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }

//   componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     );
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }

export default Clock;