import React, { Component } from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import CreateAccount from './components/CreateAccount';
import AccountDetails from './components/AccountDetails';
import Withdraw from './components/Withdraw';
import Deposit from './components/Deposit';
import Transactions from './components/Transactions';


class App extends Component {
  render() {
    return (
      <BrowserRouter>  
        <Switch>
          <Route exact path="/" component={Home} />  
          <Route path="/create" component={CreateAccount} />   
          <Route path="/accountDetails" component={AccountDetails} />   
          <Route path='/withdraw' component={ Withdraw } />    
          <Route path='/deposit' component={ Deposit } />  
          <Route path='/transactions' component={ Transactions } />  
        </Switch> 
      </BrowserRouter>
    );
  }
}

export default App;
