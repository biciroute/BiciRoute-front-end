import React from 'react';
import { MDBBtn, MDBCol, MDBRow, MDBCard, MDBCardTitle } from "mdbreact";
import "./SignUp.css";
import swal from 'sweetalert';
import axios from 'axios';
import { Link } from 'react-router-dom';

export class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      "firstName": "", "lastName": "", "email": "", "password": "",
      "checked": false
    };
    this.submitHandler = this.submitHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.changeCheckTermsHandler = this.changeCheckTermsHandler.bind(this);
    this.validForm = this.validForm.bind(this);
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
                  <img src={process.env.PUBLIC_URL + "/images/logo.jpg"}
                    className="avatar" alt="Cinque Terre"
                  />
                  <MDBCardTitle className="sign-post-biciroute" style={{ alignSelf: "center" }}>
                    BiciRoute
                        </MDBCardTitle>

                  <form className="needs-validation" onSubmit={this.submitHandler} noValidate>
                    <MDBRow>
                      <MDBCol md="6" className="mb-1">
                        <label htmlFor="firstNameInput" className="grey-text">
                          First name
                              </label>
                        <input value={this.state.firstName} name="firstName" onChange={this.changeHandler}
                          type="text" id="firstNameInput" className="form-control"
                          placeholder="First name" required
                        />
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">You must enter a valid first name.</div>
                      </MDBCol>
                      <MDBCol md="6" className="mb-1">
                        <label htmlFor="lastNameInput" className="grey-text">
                          Last name
                              </label>
                        <input value={this.state.lastName} name="lastName" onChange={this.changeHandler}
                          type="text" id="lastNameInput" className="form-control"
                          placeholder="Last name" required
                        />
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">You must enter a valid last name.</div>
                      </MDBCol>
                    </MDBRow>
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
                        <div className="invalid-feedback">You must enter a valid email.</div>
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
                          Password must contain at least one number, one lowercase letter, one uppercase letter,
                          and a minimum length of 6 characters.
                              </div>
                      </MDBCol>
                    </MDBRow>

                    <MDBCol md="12" className="mb-1">
                      <div className="custom-control custom-checkbox pl-3">
                        <input value={this.state.checked} onChange={this.changeCheckTermsHandler} type="checkbox"
                          id="invalidCheck" className="custom-control-input"
                          name="checked" required
                        />
                        <label className="custom-control-label" htmlFor="invalidCheck">
                          Agree to terms and conditions
                              </label>

                      </div>
                    </MDBCol>
                    <MDBBtn color="elegant" type="submit" id="submit">
                      Sign Up
                          </MDBBtn>
                    <Link to="/login">Do you already have an account? Login</Link>
                  </form>

                </MDBCard>
              </MDBCol>
            </MDBRow>
          </div>
        </main>
      </React.Fragment>
    );
  }

  submitHandler(event) {
    event.preventDefault();

    if (this.validForm()) {
      var info = {
        email: this.state.email,
        password: this.state.password,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        bicicle: {
          brand: "Fox",
          color: "White"
        }
      }

      axios.post('http://localhost:8080/v1/user/register', info)
        .then(function (response) {
          console.log(response.data);

          localStorage.setItem("isLoggedIn", true);
          swal({
            title: "Good job!",
            text: "You have signed up sucessfully!",
            icon: "success",
            timer: 2000,
            button: false,
          }).then(() => {
            localStorage.setItem("accessToken", response.data.accessToken);
            var loggedUser = {
              firstName: response.data.firstName
            }
            localStorage.setItem("loggedUser", JSON.stringify(loggedUser))
            localStorage.setItem("isLoggedIn", true);
            window.location.href = "/home";
          });
        })
        .catch(function (error) {
          swal({
            title: "Ooops!",
            text: error.response,
            icon: "error",
            timer: 2000,
            button: false,
          });
        });

      /*
      if(localStorage.getItem("email="+this.state.email)!==null){
          swal({
            title:"Ooops!",
            text: "This email does already exist!. Please sign up with other email.!",
            icon: "error",
            timer: 2000,
            button: false,
          });
      }else{
          localStorage.setItem("name", this.state.firstName);
          localStorage.setItem("lastName", this.state.lastName);
          localStorage.setItem("marca","Fox");
          localStorage.setItem("color","White");
          var info = {
            email: this.state.email,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            bici: {
              brand: "Fox",
              color: "White"
            }
          }
          localStorage.setItem("email="+this.state.email,JSON.stringify(info)); //push to the database
          localStorage.setItem("isLoggedIn",true);
          localStorage.setItem("loggedUser",JSON.stringify(info));

          swal({
            title:"Good job!",
            text: "You have signed up sucessfully!",
            icon: "success",
            timer: 2000,
            button: false,
          }).then(() => {
            window.location.href = "/home";
          });
      }*/
    }
  };

  changeCheckTermsHandler(event) {
    this.setState({ checked: event.target.checked });
  }

  changeHandler(event) {
    this.setState({ [event.target.name]: event.target.value });
  };

  validForm() {
    if (this.validInternationalNames(this.state.firstName) && this.validInternationalNames(this.state.lastName) &&
      this.validEmail(this.state.email) && this.validPasswordFormat(this.state.password) && this.state.checked) {
      return true;
    }

    if (this.validInternationalNames(this.state.firstName)) document.getElementById("firstNameInput").className = "form-control is-valid";
    else {
      document.getElementById("firstNameInput").className = "form-control is-invalid";
    }

    if (this.validInternationalNames(this.state.lastName)) document.getElementById("lastNameInput").className = "form-control is-valid";
    else {
      document.getElementById("lastNameInput").className = "form-control is-invalid";
    }

    if (this.validEmail(this.state.email)) document.getElementById("emailInput").className = "form-control is-valid";
    else {
      document.getElementById("emailInput").className = "form-control is-invalid";
    }

    if (this.validPasswordFormat(this.state.password)) document.getElementById("passwordInput").className = "form-control is-valid";
    else {
      document.getElementById("passwordInput").className = "form-control is-invalid";
    }

    if (this.state.checked) document.getElementById("invalidCheck").className = "custom-control-input is-valid";
    else {
      document.getElementById("invalidCheck").className = "custom-control-input is-invalid";
    }
    return false;
  }

  /*
    The password must contain at least one number,
    one lowercase letter, one uppercase letter,
    and a minimum length of 6 characters.
  */
  validPasswordFormat(password) {
    var re = /^((?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]))(?=.{6,})/u;
    return re.test(password);
  }

  validInternationalNames(name) {
    var re = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
    return re.test(name);
  }

  validEmail(email) {
    var re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

}