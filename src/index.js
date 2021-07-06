import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import tachyons from 'tachyons';
import App from './containers/App';

// import Card from './Card';
// import {robots}  from './robots';
// import Prop from './Prop';
// import CardList from './CardList';



ReactDOM.render(
  <React.Fragment>
    <div >
      <App />
      {/* <Prop propElem={<h1>prop element</h1>}/> */}
      {/* <Card id = {robots[0].id} name = {robots[0].name} username = {robots[0].username} email = {robots[0].email}/> */}
      {/* <Card id = {robots[1].id} name = {robots[1].name} username = {robots[1].username} email = {robots[1].email}/>  */}
    </div>,
  </React.Fragment>,
  document.getElementById('root')
 );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
