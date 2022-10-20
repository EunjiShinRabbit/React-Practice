import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import WelcomeProp from './WelcomeProp';
// import Comment from './Comment';
// const comment = {
//   date : new Date(),
//   text : "머하고있는지 정확히 모르겠음ㅋㅋㅋ",
//   author : {
//     name: 'Hello Kitty',
//     avatarUrl: 'http://placekitten.com/g/64/64'
//   }
// }
// {!auth.isLogin && <Redirect to="/login" />}
// import { Redirect } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Setting from './pages/Setting'
import News from './pages/News';
import News2 from './pages/News2';

function App() {
  // const element = <WelcomeProp name="애오앵옹" jobs="개발자"/>
  return (
    <>
      <h1>~라우터 연습!~</h1>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/setting' element={<Setting/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/news2' element={<News2/>}/>
        </Routes>
        {/* {element}
        <WelcomeProp name = "브라키오사우르스">초식공룡</WelcomeProp>
        <WelcomeProp name = "스테고사우르스"/>
        <WelcomeProp name = "티라노사우르스"/>
        <Comment date={comment.date} text={comment.text} author={comment.author}/> */}
      </Router>
    </>
    
  );
}

export default App;
