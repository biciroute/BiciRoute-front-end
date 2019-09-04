import React from 'react';
import { Link } from '@material-ui/core';

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