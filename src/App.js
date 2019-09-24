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
      <div>
        {localStorage.getItem('isLoggedIn') ? <div><Menu /><Home /></div> : <Login />}
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

    const ProfileView = () => (
      <div>
        {localStorage.getItem('isLoggedIn') ? <div><Menu /><ProfileView/></div> : <Login />}
      </div>
    );

    const MyLastRoutesView = () => (
      <div>
        {localStorage.getItem('isLoggedIn')? <LastRoutes /> : <Login />}
      </div>
    );

    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/login" component={LoginView} />
          <Route exact path="/signup" component={SignUpView} />
          <Route exact path="/home" component={HomeView} />
          <Route exact path="/myProfile" component={ProfileView} />
          <Route exact path = "/mylastroutes" component={MyLastRoutesView} />
        </Switch>
      </Router>
    );
  }
}

export default App;