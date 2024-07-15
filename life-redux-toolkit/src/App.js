import './App.css';
import React from "react";
import {createStore} from "redux";
import {Provider, useSelector, useDispatch} from 'react-redux';
import store from'./store';
import counterSlice from './counterSlice';
import { up, down } from './counterSlice';


// function reducer(state, action) {

//   if(action.type === 'up'){
//     return {...state, value : state.value + action.step};
//   }
//   return state;
// }

// const initialState = {value : 0};
// var store = createStore(reducer, initialState);

function Counter(){
  console.log("counterSlice:::", counterSlice);
  const disPatch = useDispatch();
  const count = useSelector(state => {
    return state.counter.value;
  });
  console.log("up:::", down());
  return(
    <div>
      <button onClick={()=>{
        // disPatch({type : 'counterSlice/up', step : 2});/
        // disPatch(counterSlice.actions.up(2));
        disPatch(up(2));
      }}>+</button>{count}
      <button onClick={()=>{
        disPatch(counterSlice.actions.down(2))
      }}>
      -</button>
    </div>
  )
}

function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter></Counter>
      </div>
    </Provider>
  );
}

export default App;
