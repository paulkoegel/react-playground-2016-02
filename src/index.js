import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

import styles from './styles/app.css';

import App from './App';
import One_BookPage from './01-BookPage';
import Two_BookPage from './02-BookPage';
import Three_BookPage from './03-BookPage';
import Four_BookPage from './04-BookPage';
import Five_BookPage from './05-BookPage-from-4';
import ES6_7 from './99-ES6-7';


window.React = React;
window.ReactDOM = ReactDOM;

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={ App }>
      <Route path='01' component={ One_BookPage } />
      <Route path='02' component={ Two_BookPage } />
      <Route path='03' component={ Three_BookPage } />
      <Route path='04' component={ Four_BookPage } />
      <Route path='05' component={ Five_BookPage } />
      <Route path='99' component={ ES6_7 } />
      {/*<Route path='users' component={Users}>
        <Route path="/user/:userId" component={User}/>
      </Route>
      <Route path="*" component={NoMatch}/> */ }
    </Route>
  </Router>
, document.querySelector('#app'))
