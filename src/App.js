import React, { Component } from 'react';
import './App.css';
import { Home } from './component/Home.js';
import { Login } from './component/Login.js';
import { SignUp } from './component/SignUp.js';
import { Container } from './Container';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);
    localStorage.setItem('email=camilo@biciroute.com', 'camilo');
  }


  render() {

    const HomeVar = () => (
      <Container onMenu="true">
        <Home />
      </Container>

    );

    const LoginView = () => (
      <Login />
    );

    const SignUpView = () => (
      <SignUp />
    );

    if (!localStorage.getItem('isLoggedIn')) {
      return (
        <Router>
          <Switch>
            <Route exact path="/" component={LoginView} />
            <Route exact path="/login" component={LoginView} />
            <Route exact path="/signup" component={SignUpView} />
          </Switch>
        </Router>
      );
    }
    else {
      return <HomeVar />
    }
  }
}

export default App;