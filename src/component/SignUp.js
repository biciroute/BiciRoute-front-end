import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Link } from 'react-router-dom'; //this is important for routing
import './SignUp.css';

export class SignUp extends React.Component{

    constructor(props){
        super(props);
        this.state = {"firstName":"", "lastName":"", "email":"", "password":""};
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    render(){

        return(
            <React.Fragment>
                <CssBaseline />
                <main className="layoutSignUp">
                    <Grid container>
                        <Hidden only='xs'>
                            <Grid item xs={false} sm={4} md={7}>
                                <div
                                    className="imageBackground"
                                />
                            </Grid>
                        </Hidden>
                        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                            <Paper class="paper">
                                <Grid container justify="center" alignItems="center">
                                    <Avatar alt="biciroute Logo" src={process.env.PUBLIC_URL+ "/images/logo.jpg"}
                                        style={{margin: 10,
                                                width: 150,
                                                height: 150,}}
                                        className="bigAvatar" />
                                </Grid>
                                <Typography component="h1" variant="h5">
                                    Sign Up
                                </Typography>
                                <form className="form" onSubmit={this.handleSubmit}>
                                    <Grid container spacing={8}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                variant="outlined" margin="dense"                                          
                                                required fullWidth
                                                id="firstName" label="First Name"
                                                name="firstName" autoComplete="fname" autoFocus
                                                onChange={this.handleFirstNameChange}
                                            />
                                        </Grid>                                 
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                variant="outlined" margin="dense"
                                                required fullWidth
                                                id="lastName" label="Last Name"
                                                name="lastName" autoComplete="lname"
                                                onChange={this.handleLastNameChange}
                                            />
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={0}>
                                        <Grid item xs={12}>
                                            <TextField
                                                variant="outlined" margin="dense"
                                                required fullWidth
                                                id="email" label="Email Address"
                                                name="email" autoComplete="email"
                                                onChange={this.handleEmailChange}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                variant="outlined" margin="dense"
                                                required fullWidth
                                                name="password" label="Password"
                                                type="password" id="password" autoComplete="current-password"
                                                onChange={this.handlePasswordChange}
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
                                        color="primary" className="submit">
                                        Sign Up
                                    </Button>

                                    <Grid container justify="flex-end">
                                        <Grid item>
                                            <Link to="/login">
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

    handleFirstNameChange(e) {
        localStorage.setItem("nombre", e.target.value);
        this.setState({
            firstName: e.target.value
        });
    }

    handleLastNameChange(e) {
        localStorage.setItem("apellido", e.target.value);
        this.setState({
            lastName: e.target.value
        });
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
        if(localStorage.getItem("email="+this.state.email)!==null){
            alert("This email does already exist!. Please sign up with other email.");
        }else{
            localStorage.setItem("email="+this.state.email,this.state.password);
            localStorage.setItem('correo', this.state.email);
            alert("You have signed up successfully!");
            window.location.href = "/login";
        }
    }

}