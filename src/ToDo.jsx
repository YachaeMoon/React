import React from "react"

import {
    ListItem,
    ListItemText,
    InputBase,
    Checkbox,
    IconButton,
    ListItemSecondaryAction,
}from "@material-ui/core"

import DeleteOutlined from "@material-ui/icons/DeleteOutlined"

class ToDo extends React.Component{

    constructor(props){
        super(props);
        this.state = {item:this.props.item}
        this.delete = this.props.delete
    }

    deleteEventHandler = (e) => {
        this.delete(this.state.item)
    }

    render(){
        const item = this.state.item;
        return(
            <ListItem>
                <Checkbox checked={item.done} />
                <ListItemText>
                    <InputBase
                        InputProps={{"aria-label":"naked"}}
                        type="text"
                        id={item.id}
                        name={item.id}
                        value={item.title}
                        multiline={true} 
                        fullWidth={true} 
                    />
                </ListItemText>
                <ListItemSecondaryAction>
                    <IconButton aria-label="Delete ToDo" onClick={this.deleteEventHandler}> 
                        <DeleteOutlined />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        )
    }
}

export default ToDo;