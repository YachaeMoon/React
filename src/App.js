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