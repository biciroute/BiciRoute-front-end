import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
//import moment from "moment";

//import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Login } from './component/Login.js';
import { Home } from './component/Home.js';
import { SignUp } from './component/SignUp.js';

class App extends Component {

  constructor(props) {
    super(props);
    localStorage.setItem('email=camilo@biciroute.com', 'camilo');
  }

  render() {

    const LoginView = () => (
      <div>{localStorage.getItem('isLoggedIn') != null ? <Home /> : <Login />} </div>
    );
    
    const SignUpView = () => (
      <SignUp/>
    );

    const HomeView = () => (
      <div>{localStorage.getItem('isLoggedIn') != null ? <Home /> : <Login />} </div>
    );

    return (
      <Router>
        <div className="App">
          <div>
            <Route exact path="/" component={LoginView} />
            <Route path="/home" component={HomeView} />
            <Route path="/signup" component={SignUpView} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;