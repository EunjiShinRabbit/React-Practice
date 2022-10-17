import './App.css';
import WelcomeProp from './WelcomeProp';
import Comment from './Comment';
const comment = {
  date : new Date(),
  text : "머하고있는지 정확히 모르겠음ㅋㅋㅋ",
  author : {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
}

function App() {
  // const element = <WelcomeProp name="애오앵옹" jobs="개발자"/>
  return (
    <div>
      {/* {element} */}
      <WelcomeProp name = "브라키오사우르스">초식공룡</WelcomeProp>
      <WelcomeProp name = "스테고사우르스"/>
      <WelcomeProp name = "티라노사우르스"/>
      <Comment date={comment.date} text={comment.text} author={comment.author}/>
    </div>
  );
}

export default App;
