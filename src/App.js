import React, { Component } from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/header';
import Homepage from './pages/Homepage/Homepage';
class App extends Component{
  render()
  {

    return(
      <div>
      <Header/>
      <Switch>
      <Route exact path='/' component={Homepage}/>
      </Switch>
      </div>
      );
  }
}

export default App;
