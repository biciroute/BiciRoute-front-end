import React, { Component } from 'react';
import './App.css';
import { Home } from './component/Home.js';
import { Login } from './component/Login/Login.js';
import { SignUp } from './component/SignUp/SignUp.js';
import ProfileView from './component/MyProfile/ProfileView.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {PublicHome} from './component/PublicHome/PublicHome.js';
import {MyRoutes} from './component/MyRoutes/MyRoutes.js';
import MyNavBar from './component/MyNavBar/MyNavBar.js';
import MyAppBar from './component/MyAppBar/MyAppBar';

class App extends Component {

  render() {

    const HomeView = () => (
      <React.Fragment>
        {localStorage.getItem('isLoggedIn') ? <React.Fragment><MyNavBar /><Home /></React.Fragment> : <PublicHome />}
      </React.Fragment>
    );

    const LoginView = () => (
      <React.Fragment>
        {localStorage.getItem('isLoggedIn') ?<HomeView /> : <Login />}
      </React.Fragment>
    );

    const SignUpView = () => (
      <React.Fragment>
        {localStorage.getItem('isLoggedIn') ? <HomeView /> : <SignUp />}
      </React.Fragment>
    );

    const ProfileVieww = () => (
      <React.Fragment>
        {localStorage.getItem('isLoggedIn') ? <React.Fragment><MyAppBar /><ProfileView/></React.Fragment> : <Login />}
      </React.Fragment>
    );

    const MyRoutesView = () => (
      <React.Fragment>
        {localStorage.getItem('isLoggedIn')? <React.Fragment><MyAppBar/><MyRoutes /></React.Fragment> : <Login />}
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
          <Route exact path = "/myroutes" component={MyRoutesView} />
        </Switch>
      </Router>
    );
  }
}

export default App;