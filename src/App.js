import React from 'react';
import './App.css';
import 'react-datepicker/dist/react-datepicker.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Login } from './Login.js';

class App extends React.Component{

  constructor(props){
    super(props);
    localStorage.setItem('email=diego@biciroute.com', 'diego');
  }

  render(){
    const LoginView = () => (
      <Login/>
    );

    const NotFoundView = () => (
      <div>Page not found, we are working in it, try later!</div>
    );

    return(
      <Router>
        <div className = "App">
          <Switch>
            <Route exact path = "/login" component={LoginView} />
            <Route component={NotFoundView} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
