import React, { Component } from 'react';
import './App.css';
import { PrivateHome } from './component/PrivateHome/PrivateHome.js';
import { Login } from './component/Login/Login.js';
import { SignUp } from './component/SignUp/SignUp.js';
import ProfileView from './component/MyProfile/ProfileView.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {PublicHome} from './component/PublicHome/PublicHome.js';
import {LastRoutes} from './component/LastRoutes/LastRoutes.js';
import Notifications from './component/Notifications/Notifications.js';

class App extends Component {

  render() {

    const HomeView = () => (
      <React.Fragment>
        {localStorage.getItem('isLoggedIn') ? <PrivateHome/>: <PublicHome />}
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
        {localStorage.getItem('isLoggedIn') ? <React.Fragment><MyAppBar title="My profile"/><ProfileView/></React.Fragment> : <Login />}
      </React.Fragment>
    );

    const NotificationsView = () => (
      <React.Fragment>
        {localStorage.getItem('isLoggedIn') ? <React.Fragment><Menu /><Notifications/></React.Fragment> : <Login />}
      </React.Fragment>
    );

    const MyLastRoutesView = () => (
      <React.Fragment>
        {localStorage.getItem('isLoggedIn')? <MyRoutes /> : <Login />}
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
          <Route exact path = "/notifications" component={NotificationsView} />
        </Switch>
      </Router>
    );
  }
}

export default App;