import React from "react"

function TodoItem(props){
    console.log("item", props.item);
    const deleteItem = ()=>{
        let tempList = props.todoList.filter((item)=>{
            return item.id !==props.id; 
        })
        props.setTodoList(tempList);
    };
    return(
        <div className="todo-item">
            {props.item}
            <button onClick={deleteItem}>삭제</button>
        </div>
    );
}

export default TodoItem;