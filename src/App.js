import React, { Component } from 'react';
import './App.css';
import { Home } from './component/Home.js';
import { Login } from './component/Login/Login.js';
import { Menu } from './component/Menu/Menu.js';
import { SignUp } from './component/SignUp/SignUp.js';
import ProfileView from './component/ProfileView.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {PublicHome} from './component/PublicHome/PublicHome.js';

class App extends Component {
  constructor(props) {
    super(props);
    localStorage.setItem('email=camilo@biciroute.com', 'camilo');
    localStorage.setItem("name", "AAAAAAAAAAAAAAAAAAAA");
    localStorage.setItem("lastName", "Tesla");
  }


  render() {

    const HomeView = () => (
      <div>
        {localStorage.getItem('isLoggedIn') ? <div><Menu /><Home /></div> : <PublicHome />}
      </div>
    );

    const LoginView = () => (
      <div>
        {localStorage.getItem('isLoggedIn') ?<div><Menu /><Home /></div> : <Login />}
      </div>
    );

    const SignUpView = () => (
      <div>
        {localStorage.getItem('isLoggedIn') ? <div><Menu /><Home /></div> : <SignUp />}
      </div>
    );

    const ProfileVieww = () => (
      <div>
        {localStorage.getItem('isLoggedIn') ? <div><Menu /><ProfileView /></div> : <Login />}
      </div>
    );

      return (
        <Router>
          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route exact path="/login" component={LoginView} />
            <Route exact path="/signup" component={SignUpView} />
            <Route exact path="/home" component={HomeView} />
            <Route exact path="/myProfile" component={ProfileVieww} />
          </Switch>
        </Router>
      );
  }
}

export default App;