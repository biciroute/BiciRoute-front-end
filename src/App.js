import React, { Component } from 'react';
import './App.css';
import { Home } from './component/Home.js';
import { Login } from './component/Login/Login.js';
import { Menu } from './component/Menu/Menu.js';
import { SignUp } from './component/SignUp/SignUp.js';
import ProfileView from './component/ProfileView.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {PublicHome} from './component/PublicHome/PublicHome.js';
import {LastRoutes} from './component/LastRoutes/LastRoutes.js';
import Notifications from './component/Notifications/Notifications.js';

class App extends Component {
  constructor(props) {
    super(props);
    var info = {
      email: "camilo@biciroute.com",
      firstName: "Camilo",
      lastName: "Velandia",
      password: "camilo",
      bici: {
        brand: "Fox",
        color: "Red" 
      }
    };
    localStorage.setItem('email=camilo@biciroute.com', JSON.stringify(info));
  }

  render() {

    const HomeView = () => (
      <React.Fragment>
        {localStorage.getItem('isLoggedIn') ? <React.Fragment><Menu /><Home /></React.Fragment> : <PublicHome />}
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

    const NotificationsView = () => (
      <React.Fragment>
        {localStorage.getItem('isLoggedIn') ? <React.Fragment><Menu /><Notifications/></React.Fragment> : <Login />}
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
          <Route exact path = "/notifications" component={NotificationsView} />
        </Switch>
      </Router>
    );
  }
}

export default App;