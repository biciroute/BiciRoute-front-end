import React from 'react';
import { Link } from 'react-router-dom'; //this is important for routing
import './SignUp.css';
import { MDBCard, MDBCardTitle, MDBCardText, MDBContainer } from "mdbreact";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";

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
            <div className="bg">
                <MDBContainer>
                    <MDBCard className="card-body" style={{ width: "22rem", marginTop: "1rem" }}>

                    <form
          className="needs-validation"
          onSubmit={this.submitHandler}
          noValidate
        >
          <MDBRow>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterNameEx"
                className="grey-text"
              >
                First name
              </label>
              <input
                value={this.state.fname}
                name="fname"
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterNameEx"
                className="form-control"
                placeholder="First name"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterEmailEx2"
                className="grey-text"
              >
                Last name
              </label>
              <input
                value={this.state.lname}
                name="lname"
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterEmailEx2"
                className="form-control"
                placeholder="Last name"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            </MDBRow>
            </form>
            </MDBCard>
                </MDBContainer>
            </div>
        );
    }

    handleFirstNameChange(event) {
        localStorage.setItem("nombre", event.target.value);
        this.setState({
            firstName: event.target.value
        });
    }

    handleLastNameChange(event) {
        localStorage.setItem("apellido", event.target.value);
        this.setState({
            lastName: event.target.value
        });
    }

    handleEmailChange(event) {
        this.setState({
            email: event.target.value
        });
    }

    handlePasswordChange(event) {
        this.setState({
            password: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        //event.target.className += " was-validated";
        if(localStorage.getItem("email="+this.state.email)!==null){
            alert("This email does already exist!. Please sign up with other email.");
        }else{
            localStorage.setItem("email="+this.state.email,this.state.password);
            alert("You have signed up successfully!");
            window.location.href = "/login";
        }
    }

}