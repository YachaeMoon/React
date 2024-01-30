import React from "react"

import {
    ListItem,
    ListItemText,
    InputBase,
    Checkbox
}from "@material-ui/core"

class ToDo extends React.Component{

    //생성자
    constructor(props){
        super(props); //상위 클래스에서 넘겨준 모든 props를 현재 클래스에 저장
        //state 생성 - item이라는 이름으로 props 중에서 item이라는 값을 state로 저장
        this.state = {item:props.item}
    }

    render(){
        //자주 사용하는 데이터를 짧게 사용하기 위해 다른 변수에 대입
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
                        multiline={true} //여러줄로 생성
                        fullWidth={true} //화면에 꽉차게
                    />
                </ListItemText>
            </ListItem>
        )
    }
}

export default ToDo;