import {configureStore} from '@reduxjs/toolkit';
import counterSliceThunk from './counterSliceThunk';

const store = configureStore({
    reducer:{
      counter: counterSliceThunk.reducer
    }
  });

export default store;