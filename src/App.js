/*eslint-disable*/
import './App.css';
import {useState} from "react";
import React from "react";
function App() {
    let [sub, setSub] = useState(['남자 헤어 추천', '여자 헤어 추천', '맛집 추천']);
    let [like, setLike] = useState(new Array(sub.length).fill(0));
    let [modal, setModal] = useState(false);
    let [title, setTitle] = useState(0);
    let [inputVal, setInputVal] = useState('');
    return (
        <div className="App">

            <div className="black-nav">
                <h4>블로그</h4>
            </div>

            <button onClick={() => {
                let copy = [...sub];
                copy.sort();
                setSub(copy);
            }}>
                정렬 버튼
            </button>

            {
                sub.map(function (item, index){
                    return (
                        <div className="list" key={index}>
                            <h4 onClick={() => {setModal(!modal); setTitle(index);}}>{item}
                                <span onClick={(e)=> {
                                    let copy = [...like];
                                    copy[index] = copy[index] + 1;
                                    setLike(copy);
                                    e.stopPropagation();
                                }}>
                                    👍 {like[index]}
                                </span>
                            </h4>
                            <p>3월 4일 발행</p>
                            <button onClick={()=> {
                                let copy = [...sub];
                                copy.splice(index,1);
                                setSub(copy);

                            }}>삭제</button>
                        </div>
                    )
                })
            }
            {/*input 값이 변경 됐을 때 동작할 함수*/}
            <input type="text" onChange={ (e) => {
                setInputVal(e.target.value);
            }}/>
            <button onClick={()=> {
                let copy = [...sub];
                copy.unshift(inputVal);
                setSub(copy);
            }}>발행</button>
            {modal === true ? <Modal sub={sub} setSub={setSub} title={title}></Modal> : null}

            <Modal2 param ='yello'></Modal2>
        </div>
    );
}


class Modal2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name : 'Lee',
            age : 20
        }
    }
    render() {
        return (
            <div>hello class {this.props.param} </div>
        )
    }
}


function Modal(props) {


    return (
        <div className="modal">
            <h4>
                {props.sub[props.title]}
            </h4>
            <p>날짜</p>
            <p>상세내용</p>
            <button onClick={() => {
                props.setSub(['점메추', '여자 헤어 추천', '맛집 추천']);
            }}>제목변경 버튼</button>

        </div>
    )
}

export default App;
