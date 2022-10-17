const WelcomeProp = (props) =>{
  const {name, children} = props;
  return(
    <div>
      <p>안녕하세요! {name}!</p>
      {/* <p>{props.name}의 직업은 {props.jobs}</p> */}
      <p>children 값은 {children} 입니다</p>
    </div>
  );
}
WelcomeProp.defaultProps = {
  name : "기본 이름",
  jobs : "무직"
};

export default WelcomeProp;