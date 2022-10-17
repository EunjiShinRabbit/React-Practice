import "./Sample.css"

// function SampleJSX() {} 해도 되고 아래처럼 화살표 함수로 해도 됨
const SampleJSX = () => {
  const name = "토끼";
  // const textStyle = { // 리터럴 객체 생성, 이름: 값
  //   backgroundColor : "#eee",
  //   color : "pink",
  //   fonrSize : "2rem"
  // };
  return (
    <div className="textStyle">
      {/* div의 속성에 style={textStyle}로도 인라인으로 스타일 줄 수 있음 */}
      {/* 조건 분기 */}
      {name.length < 3? <h1>고양이</h1> : <h1>name</h1>}
      {/* 조건부 렌더링 */}
      {name === "토끼" && <h1>{name}를 출력함</h1>}
    </div>
  );
}

export default SampleJSX;