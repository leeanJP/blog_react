/*eslint-disable*/
import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  let subject = '서면 맛집 추천';
  let data = 'red';

  let [sub,setSub] = useState(['남자 헤어 추천', '여자 헤어 추천', '맛집 추천']);
  let [like, likeFun]  = useState(0);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그</h4>
      </div>
      <button onClick={() =>{
        console.log('정렬 버튼 클릭');
        let copy = [...sub];
        copy.sort();
        setSub(copy);
      }}>정렬 버튼</button>
      <div className="list">
        <h4 onClick={() => {setModal(true)}}>{sub[0]}
          { modal == true ? <Modal></Modal> : null}
          <span onClick={()=> {likeFun(like+1)}}>👍 </span>
          {like}
        </h4>
        <p>3월 4일 발행</p>
        <button onClick={() => {
          let copy = [...sub];
          console.log(copy === sub);
          copy[0] = '코디 추천';
          console.log(copy === sub);
          setSub(copy);
          }
        }>제목 변경</button>
      </div>
      <div className="list">
        <h4>{sub[1]}</h4>
        <p>3월 4일 발행</p>
      </div>
      <div className="list">
        <h4>{sub[2]}</h4>
        <p>3월 4일 발행</p>
      </div>

      {/*if state가 true면 modal 보여주고
      false면 modal 안보여주고*/}
      {modal == true ? <Modal></Modal> : null}
    </div>
  );
}



function Modal(){



  return (
      <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}

export default App;
