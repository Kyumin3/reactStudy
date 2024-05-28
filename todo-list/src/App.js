import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import TodoBaord from './components/TodoBaord';


function App() {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);
  let [idIndex, setIdIndex] = useState(0);
  const addItem = () =>{
    setIdIndex(idIndex = idIndex + 1);
    setTodoList([...todoList, {id : idIndex, value :inputValue}]);
  }
  return (
    <main>
      <input value={inputValue} type="text" onChange={(event)=> setInputValue(event.target.value)}/>
      <button onClick={addItem}>추가</button>

      <TodoBaord list={todoList} setTodoList = {setTodoList} todoList={todoList}/>

    </main>
  );
}

export default App;
