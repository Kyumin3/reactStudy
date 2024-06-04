import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppNonRedux from './App_nonRedux';
import AppRedux from './App_redux';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <AppNonRedux />
//   </React.StrictMode>
// );

root.render(
  <React.StrictMode>
    <AppRedux />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
