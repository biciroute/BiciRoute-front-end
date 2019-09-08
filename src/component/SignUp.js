import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'; //this is important for routing
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import './SignUp.css';

export class SignUp extends React.Component{

    constructor(props){
        super(props);
        this.state = {'email':"", 'password':"", "confirmPassword":""};
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    render(){


        return(
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Grid container>
                        <Grid item xs={false} sm={4} md={7}>
                            <div className="imageBackground"></div>
                        </Grid>
                        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                            <Paper class="paper">
                                <Avatar className="avatar">
                                    <LockOutlinedIcon />
                                </Avatar>
                                <Typography component="h1" variant="h5">
                                    Sign Up
                                </Typography>
                                <form className="form" style={{padding: 20}}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={5}>
                                            <TextField
                                                autoComplete="fname" name="firstName" variant="outlined"
                                                required fullWidth
                                                id="firstName" label="First Name" autoFocus
                                            />
                                        </Grid>
                                        
                                        <Grid item xs={12} sm={5}>
                                            <TextField
                                                variant="outlined" required fullWidth
                                                id="lastName" label="Last Name"
                                                name="lastName" autoComplete="lname"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                variant="outlined" margin="normal"
                                                required fullWidth
                                                id="email" label="Email Address"
                                                name="email" autoComplete="email"
                                                autoFocus
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                variant="outlined" margin="normal"
                                                required fullWidth
                                                name="password" label="Password"
                                                type="password" id="password" autoComplete="current-password"
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <FormControlLabel
                                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                                label="I want to receive inspiration, marketing promotions and updates via email."
                                            />
                                        </Grid>

                                    </Grid>

                                    <Button type="submit" fullWidth variant="contained"
                                    color="primary" className="submit"
                                    >
                                        Sign Up
                                    </Button>

                                    <Grid container justify="flex-end">
                                        <Grid item>
                                        <Link to="/signup">
                                            Already have an account? Sign in
                                        </Link>
                                        </Grid>
                                    </Grid>

                                </form>


                            </Paper>
                        </Grid>
                    </Grid>
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

    handleConfirmPasswordChange(e) {
        this.setState({
            confirmPassword: e.target.value
        });
    }

    handleSubmit(e) {
        if(this.state.password !==this.state.confirmPassword){
            e.preventDefault();
            alert("The passwords doesn't match!. Please reenter your passwords");
        }
        else if(!localStorage.getItem("email="+this.state.email)){
            e.preventDefault();
            alert("This email does already exist. Please sign up with other email");
        }else{
            e.preventDefault();
            alert("The email or password is incorrect");
        }
    }

}