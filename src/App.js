import React, { Component } from 'react';
import './App.css';
import { Home } from './component/Home.js';
import { Login } from './component/Login.js';
import { SignUp } from './component/SignUp.js';
import { Container } from './Container';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {PublicHome} from './component/PublicHome.js';

class App extends Component {
  constructor(props) {
    super(props);
    localStorage.setItem('email=camilo@biciroute.com', 'camilo');
  }


  render() {

    const HomeView = () => (
      <div>
        {localStorage.getItem('isLoggedIn') ? <Container onMenu="true"><Home /></Container> : <PublicHome/>}
      </div>
    );
    
    const PublicHomeView = () => (
      <div>
        {localStorage.getItem('isLoggedIn') ? <Container onMenu="true"><Home /></Container> : <PublicHome/>}
      </div>
    );

    const LoginView = () => (
      <div>
        {localStorage.getItem('isLoggedIn') ? <Container onMenu="true"><Home /></Container> : <Login/>}
      </div>
    );

    const SignUpView = () => (
      <div>
        {localStorage.getItem('isLoggedIn') ? <Container onMenu="true"><Home /></Container> : <SignUp />}
      </div>
    );

    return (
      <Router>
        <Switch>
          <Route exact path="/" component={PublicHomeView} />
          <Route exact path="/login" component={LoginView} />
          <Route exact path="/signup" component={SignUpView} />
          <Route exact path="/home" component={HomeView} />
        </Switch>
      </Router>
    );
  }
}

export default App;