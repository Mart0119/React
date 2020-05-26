import React from 'react';
import {
  BrowserRouter as Router,Route,Link
} from 'react-router-dom'
import './App.css';

import Home from './view/home/home'
function App() {
  return (
    <Router>
    <div className="App">
      <h1>123456</h1>
      <Route path="/home" component={Home}></Route>
    </div>
    </Router>
  );
}

export default App;
