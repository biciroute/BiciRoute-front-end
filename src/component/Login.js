import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'; //this is important for routing
import './Login.css';
import Avatar from '@material-ui/core/Avatar';

export class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {'email':"", 'password':""};
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render(){

        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <br></br>
                        
                        <Avatar className="avatar">
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography variant="headline"> BiciRoute </Typography>
                        <form className="form" onSubmit={this.handleSubmit}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email" class="email">Email Address</InputLabel>
                                <Input id="email" name="email" autoComplete="email" autoFocus onChange={this.handleEmailChange}/>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>

                                <InputLabel htmlFor="password">
                                    Password
                                </InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={this.handlePasswordChange}
                                />
                            </FormControl>
                            <Button id="buttonLogin"
                                type="submit"
                                fullWidth
                                variant="raised"
                                color="primary"
                                className="submit">
                                Sign in
                            </Button>
                            <br></br>
                            <br></br>
                            <div>
                                Don't you have an account yet? <Link to="/signup">Sign up!</Link>
                            </div>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
            
        );
    }

    handleEmailChange(e) {
        this.setState({
            email: e.target.value
        });
    }

    handlePasswordChange(e) {
        this.setState({
            password: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        if(localStorage.getItem("email="+this.state.email)===this.state.password){
            localStorage.setItem('isLoggedIn',true);
            localStorage.setItem('correo', this.state.email);
            window.location.href = "/home";
        }else{
            alert("The email or password is incorrect");
        }
    }

}