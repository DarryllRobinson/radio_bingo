import React from 'react';
import ReactDOM from 'react-dom/client';
import { render } from 'react-dom';
import { history } from './helpers';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router history={history}>
    <App />
  </Router>
);

// attempt silent token refresh before startup
//userService.refreshToken().finally(startApp);

// function startApp() {
//   render(
//     <Router history={history}>
//       <App />
//     </Router>,
//     document.getElementById('app')
//   );
// }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
