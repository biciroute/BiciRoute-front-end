import React from 'react';
import { Link } from 'react-router-dom'; //this is important for routing
import { MDBBtn, MDBCol, MDBRow, MDBCard, MDBCardTitle} from "mdbreact";
import './Login.css';
import swal from 'sweetalert';

export class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = { "email": "", "password": "" };
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    render() {
        return (
            <React.Fragment>
            <main className="layoutSignUp">
              <div className="container-fluid">
                <MDBRow className="rowBackground">
                  <MDBCol sm="4" md="7" className="d-none d-md-block" id="viewBackground" > {/* it's not shown in screen xs*/}
                  </MDBCol>
                  <MDBCol xs="12" sm="8" md="5">
                      <MDBCard className="card-body" id="cardForm">
                          <img src={process.env.PUBLIC_URL+ "/images/logo.jpg"}
                            className="avatar" alt="Cinque Terre"
                          />
                        <MDBCardTitle className="sign-post-biciroute" style={{ alignSelf: "center"}}>
                          BiciRoute
                        </MDBCardTitle>
                        
                        <form className="needs-validation" onSubmit={this.submitHandler} noValidate>
                          <MDBRow>
                            <MDBCol md="12" className="mb-1">
                              <label htmlFor="emailInput" className="grey-text">
                                Email
                              </label>
                              <input value={this.state.email} onChange={this.changeHandler} type="email"
                                id="emailInput" className="form-control"
                                name="email" placeholder="Your Email address" required
                              />
                              <div className="valid-feedback">Looks good!</div>
                              <div className="invalid-feedback">You must enter your email.</div>
                            </MDBCol>
                          </MDBRow>

                          <MDBRow>
                            <MDBCol md="12" className="mb-1">
                              <label htmlFor="passwordInput" className="grey-text" >
                                Password
                              </label>
                              <input value={this.state.password} onChange={this.changeHandler} type="password"
                                id="passwordInput" className="form-control" name="password"
                                placeholder="Your Password" required
                              />
                              <div className="valid-feedback">Looks good!</div>
                              <div className="invalid-feedback">
                                You must enter your password.
                              </div>
                            </MDBCol>
                          </MDBRow>

                          <MDBBtn color="elegant" type="submit" id="submit">
                            Login in
                          </MDBBtn>
                          <a href="/signup">Don't you have an account? Sign Up!</a>
                        </form>
                      </MDBCard>
                  </MDBCol>
                </MDBRow>
              </div>
            </main>
          </React.Fragment>
        )
    }

    changeHandler(event){
        this.setState({ [event.target.name]: event.target.value });
    };

    validForm(){
      if(this.state.email!=="" && this.state.password!=="") return true;

      if(this.state.email!=="") document.getElementById("emailInput").className = "form-control is-valid";
      else{
        document.getElementById("emailInput").className ="form-control is-invalid";
      }
      if(this.state.password!=="") document.getElementById("emailInput").className = "form-control is-valid";
      else{
        document.getElementById("passwordInput").className ="form-control is-invalid";
      }
      return false;
    }

    submitHandler(e) {
        e.preventDefault();
        if(this.validForm()){
          if(localStorage.getItem("email="+this.state.email)===this.state.password){
              localStorage.setItem('isLoggedIn',true);
              localStorage.setItem('correo', this.state.email);
              window.location.href = "/home";
          } else {
            swal({
              title:"Ooops!",
              text: "Email or Password is incorrect!",
              icon: "error",
              button: false,
              timer: 2000
            });
          }
        }
    }

}