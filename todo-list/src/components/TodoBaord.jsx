import React from "react";
import TodoItem from "./TodoItem";

function TodoBaord(props){
    console.log('props', props);
    return(
        <div>
            <h1>Todo List</h1>
            {props.list.map((item) => 
                <TodoItem item={item.value} id={item.id} setTodoList = {props.setTodoList} todoList={props.todoList}/>
            )}
            
        </div>

    );

}

export default TodoBaord;