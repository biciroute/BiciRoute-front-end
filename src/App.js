import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
//import moment from "moment";
import { Login } from './component/Login.js';
import { Home } from './component/Home.js';
//import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {

  constructor(props) {
    super(props);
    localStorage.setItem('email=camilo@biciroute.com', 'camilo');
  }

  render() {

    const LoginView = () => (
      <div>{localStorage.getItem('isLoggedIn') != null ? <Home /> : <Login />} </div>
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
          </div>
        </div>
      </Router>
    );
  }
}

export default App;