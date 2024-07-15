import {up, asyncUpFetch } from './counterSliceThunk';
import counterSliceThunk from './counterSliceThunk';
import { useDispatch, useSelector, Provider } from 'react-redux';
import store from './storeThunk';

function Counter() {
  console.log("counterSliceThunk:::", counterSliceThunk);
  
    const dispatch = useDispatch();
    const count = useSelector(state => {
        console.log("state:::", state);
        return state.counter.value;
    });
    const status = useSelector(state => {
        return state.counter.status
    });
    const visitCount = useSelector(state => {
      return state.counter.visitCount
  });

    console.log("status::::", status);

    return(
    <div>
        <button onClick={()=> {
            dispatch(up(2));
        }}>+</button>

        <button onClick={()=>{
            dispatch(asyncUpFetch());
        }}>+ async fetch</button><br/>
    
        <div>{count} | {status} | {visitCount}</div>
    </div>
    
    )
}

export default function AppThunk() {
    return (
      <Provider store={store}>
        <div>
          <Counter></Counter>
        </div>
      </Provider>
    );
  }
  
