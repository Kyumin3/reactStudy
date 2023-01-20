import Button from "./Button";
import styles from "./App.module.css"
import {useState , useEffect, useReducer} from "react";

// css Import해서 먹이기

// function App() {
//   return (
//     <div>
//       <h1 className={styles.title}>Welcome back!</h1>
//       <Button text={"Continue"}/>
//     </div>
//   );
// }
///////////////////////////////////////

///////////////useEffect 사용/////////////////
// function App() {
//   const [counter, setValue] = useState(0);
//   const [keyword, setKeyword] =useState("");
//   const onClick  = () => setValue((prev) => prev +1);
//   const onChange = (event) => setKeyword(event.target.value);

//   console.log("i run all the time");

//   useEffect(()=>{console.log("I run only once")},[]);

//   useEffect(() => {
//     if (keyword !=="" && keyword.length>5)
//       console.log("I run when 'keyword' change, keyword is",keyword);
//   }, [keyword]);

//   useEffect(() => {
//     console.log("I run when 'counter' change, counter is",counter);
//   }, [counter]);

//   useEffect(() => {
//     console.log("I run when 'keyword' and 'counter' change");
//   }, [counter,keyword]);
  
//   return (
//     <div>
//       <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
//       <h1>{counter}</h1>
//       <button onClick={onClick}>Click me</button>
//     </div>
//   );
// }

///////////////useEffect 사용 끝/////////////////

///////////////////Clean-up 사용/////////////////////////
// function Hello(){  // index.js에 <React.StrictMode>를 넣으면 double-invoked가 발생해서 console에 여러번 찍히는 상태 
//   function byeFn(){
//     console.log("bye :(");
//   }
//   function hiFn(){
//     console.log("Created :)");
//     return byeFn;  // Hello 컴포넌트가 destroy되면 실행되도록 하는 함수이다.
//   }
//   // useEffect(() => {
//   //   console.log("Created :)");
//   //   return () => console.log("destroyed"); //컴포넌트가 destroy 됐을때 작동
//   // },[]);

//    useEffect(hiFn, []);  
//   return <h1>Hello</h1>;
// }


// function App() {

//   const [showing, setShowing] = useState(false);

//   const onClick = () => setShowing((prev) => !prev);

//   return(
//     <div>
//       {showing ? <Hello /> : null}  
//       <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
//     </div>
//   );
// }
/////////////////////////Clean-up 끝///////////////////////////////////////////

////////// toDoList 시작///////////////////////////////////////////////////////
// function App(){
//   const [toDo, setTodo] =useState("");
//   const [toDos, setTodos] = useState([]);
//   const onChange = (event) => setTodo(event.target.value);
//   const onSubmit = (event) => {
//     event.preventDefault();   //submit시 새로 고침 방지
//     if(toDo ===""){
//       return;
//     }
//     setTodos(currentArray => [toDo, ...currentArray]);
//     setTodo("");
//   }
//   console.log(toDos);
//   console.log(toDos.map((item, index) => <li key={index}>{item}</li>));
//   return (
//     <div>
//       <h1>My To Dos ({toDos.length} 개)</h1>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do.." />
//         <button>Add To Do</button>
//       </form>
//       <hr />
//       <ul>
//         {toDos.map((item, index) => <li key={index}>{item}</li>)}
//       </ul>
//     </div>
//   )

// }
////////// toDoList 끝///////////////////////////////////////////////////////

function App() {
  const [loading, setLoading] = useState(true); 
  const [coins, setCoins] =useState([]);

  const [amount, setAmount] =useState(0);

  const onChange = (event) => setAmount(event.target.value); 

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {
      console.log(coins);
      setCoins(json);
      setLoading(false);
    });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>  
      {loading ? "Loading..." :       
      <select>
        {coins.map((coin, index) =>{
        let temp = amount/JSON.stringify(coin.quotes.USD.price);
        return(
        <option key={index}>
          {coin.name} ({coin.symbol}) : {amount ? `${Math.round(temp)} 개 구입가능합니다.`  : coin.quotes.USD.price+ " 달러"}
        </option>
        )})}
      </select>
      }
      <hr />
      <input onChange={onChange} type="number" placeholder=""/> 달러 지출시
    </div>
  )
}

export default App;
