import React, { Component } from 'react';
import './App.css';
import { Home } from './component/Home.js';
import { Login } from './component/Login.js';
import { Menu } from './component/Menu/Menu.js';
import { SignUp } from './component/SignUp.js';
import ProfileView from './component/ProfileView.js';
import {LastRoutes} from './component/LastRoutes/LastRoutes.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    localStorage.setItem('email=camilo@biciroute.com', 'camilo');
  }

  render() {

    const HomeView = () => (
      <React.Fragment>
        {localStorage.getItem('isLoggedIn') ? <React.Fragment><Menu /><Home /></React.Fragment> : <Login />}
      </React.Fragment>
    );

    const LoginView = () => (
      <React.Fragment>
        {localStorage.getItem('isLoggedIn') ?<React.Fragment><Menu /><Home /></React.Fragment> : <Login />}
      </React.Fragment>
    );

    const SignUpView = () => (
      <React.Fragment>
        {localStorage.getItem('isLoggedIn') ? <React.Fragment><Menu /><Home /></React.Fragment> : <SignUp />}
      </React.Fragment>
    );

    const ProfileVieww = () => (
      <React.Fragment>
        {localStorage.getItem('isLoggedIn') ? <React.Fragment><Menu /><ProfileView/></React.Fragment> : <Login />}
      </React.Fragment>
    );

    const MyLastRoutesView = () => (
      <React.Fragment>
        {localStorage.getItem('isLoggedIn')? <React.Fragment><Menu /><LastRoutes /></React.Fragment> : <Login />}
      </React.Fragment>
    );

    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/login" component={LoginView} />
          <Route exact path="/signup" component={SignUpView} />
          <Route exact path="/home" component={HomeView} />
          <Route exact path="/myProfile" component={ProfileVieww} />
          <Route exact path = "/mylastroutes" component={MyLastRoutesView} />
        </Switch>
      </Router>
    );
  }
}

export default App;