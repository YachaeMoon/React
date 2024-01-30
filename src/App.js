import './App.css';
import React from 'react';
import ToDo from './ToDo';
import {Paper, List, Container} from "@material-ui/core"
import AddToDo from './AddToDo';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {items:[ {id:0, "title":"Hello React", "done":true}, 
                          {id:1, "title":"vue", "done":false}, 
                          {id:2, "title":"angular", "done":false}]
                  }
  }

  add = (item) => {
    //react는 props는 수정할 수 없고
    //state는 수정이 가능하지만 원본을 직접 수정하는 것은 불가
    //setState 메소드를 이용해서만 수정이 가능

    //배열에 데이터를 추가하기 위해서 state의 배열을 복사
    const thisItems = this.state.items;

    //item의 id와 done 값을 설정 - title만 입력하기 때문
    item.id = "ID_" + thisItems.length;
    item.done = false;

    //복사한 데이터에 추가
    thisItems.push(item)
    //복사한 데이터를 다시 state에 적용
    this.setState({items:thisItems});
  }

  render(){
    var display = this.state.items.length > 0 && (
      <Paper style={{margin:16}}>
        <List>
          {this.state.items.map((item, idx) => (
            <ToDo item={item} key={idx} />
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