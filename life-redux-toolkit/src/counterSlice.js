import {createSlice, configureStore} from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name : 'counterSlice',
    initialState : {value : 0},
    reducers: {
      up: (state, action) =>{
        console.log("action:::", action);
        state.value = state.value + action.payload;
      },
      down : (state, action) => {
        state.value = state.value - action.payload;
      }
    }
  });



  console.log("counterSlice::::", counterSlice);


export default counterSlice;
export const {up, down} = counterSlice.actions;