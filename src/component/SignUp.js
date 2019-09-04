import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'; //this is important for routing

export class SignUp extends React.Component{
    render(){
        return(
            <div>
                <div>Sign Up!</div>
                <div>Do you already have an account?</div><Link to="/login">Login!</Link>
            </div>
        );
    }
}