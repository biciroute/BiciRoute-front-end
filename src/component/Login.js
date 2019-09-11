import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import './Login.css';


export class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = { "email": "", "password": "" };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layoutSignIn">
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
                                    <Avatar alt="biciroute logo" src={process.env.PUBLIC_URL + "/images/logo.jpg"}
                                        style={{
                                            margin: 10,
                                            width: 150,
                                            height: 150,
                                        }}
                                        className="bigAvatar" />
                                </Grid>
                                <Typography component="h1" variant="h5">
                                    Sign In
                                </Typography>
                                <form className="form" onSubmit={this.handleSubmit}>
                                    <Grid container spacing={0}>
                                        <Grid item xs={12}>
                                            <TextField
                                                variant="outlined" margin="dense"
                                                required fullWidth
                                                id="email" label="Email address"
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
                                    </Grid>
                                    <Button type="submit" fullWidth variant="contained"
                                        color="primary" className="submit">
                                        Sign In
                                    </Button>

                                    {/* <Grid container justify="flex-end">
                                        <Grid item>
                                            <Link to="/signup">
                                                Don't you have an account yet? Sign up!
                                            </Link>
                                        </Grid>
                                    </Grid> */}
                                </form>
                            </Paper>
                        </Grid>
                    </Grid>
                </main>
            </React.Fragment>
        )
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
        if(localStorage.getItem("email="+this.state.email)===this.state.password){
            localStorage.setItem('isLoggedIn',true);
            localStorage.setItem('correo', this.state.email);
            window.location.href = "/home";
        } else {
            e.preventDefault();
            alert("The email or password is incorrect");
        }
    }

}