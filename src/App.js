import './App.css';
import React from 'react';
import ToDo from './ToDo';
import {Paper, List, Container} from "@material-ui/core"
import AddToDo from './AddToDo';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {items:[]}
  }

  componentDidMount(){
    //ajax 요청 객체 생성
    let request = new XMLHttpRequest()
    //요청 준비
    request.open('GET', "http://127.0.0.1/todo?userid=Django")
    //요청
    request.send('')
    //응답 처리
    request.addEventListener('load', () => {
      //json 데이터 출력

    //JSON 문자열을 데이터로 변환
    let data = JSON.parse(request.responseText);
    console.log(data)
    //서버에서 받아온 데이터를 state에 대입해서 화면에 출력
    this.setState({items:data.list})
    })
  }

  add = (item) => {

    const thisItems = this.state.items

    item.id = "ID_" + thisItems.length
    item.done = false

    thisItems.push(item)
    this.setState({items:thisItems})
  }

  delete = (item) => {
    const thisItems = this.state.items;
    const newItems = thisItems.filter((e) => e.id !== item.id)
    this.setState({items:newItems})
  }

  render(){
    var display = this.state.items.length > 0 && (
      <Paper style={{margin:16}}>
        <List>
          {this.state.items.map((item, idx) => (
            <ToDo item={item} key={idx} delete={this.delete} /> 
          ))}
        </List>
      </Paper>
    )
    
    return(
        <div className="AppToDo">
          <Container maxWidth="md"> 
            <AddToDo add={this.add}/>
            {display}
          </Container>
        </div>
    )
  }
}

export default App; 