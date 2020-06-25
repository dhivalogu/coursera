import React from 'react';
import './App.css';
import LoginComponent from './components/LoginComponent';
import FeedComponent from './components/FeedComponent';
import courseComponent from './components/courseComponent';
import {BrowserRouter,Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <Route exact path={"/"} component={LoginComponent}/>
    <Route exact path={"/courses"} component={FeedComponent}/>
    <Route exact path={"/course/:id"} component={courseComponent}/>

    </BrowserRouter>
  );
}

export default App;
