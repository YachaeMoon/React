import './App.css';
import React from 'react';
import ToDo from './ToDo';
// import Sample from './Sample';

class App extends React.Component {
  constructor(props){
    super(props)
    //this.state.time = {item:{id:0, "title":"Hello React", "done":true}}
    this.state = {items:[ {id:0, "title":"Hello React", "done":true}, 
                          {id:1, "title":"vue", "done":false}, 
                          {id:2, "title":"angular", "done":false}]
                  }
  }

  render(){
    //배열을 순회하면서 출력할 내용을 생성
    let display = this.state.items.map((item, idx) => ( //(아이템, 인덱스)
        <ToDo item={item} key={item.id} /> //key={idx}해도 같음!
    ));
    
    return(
        <div className="App">
            {display}
        </div>
    )
  }
}

export default App;