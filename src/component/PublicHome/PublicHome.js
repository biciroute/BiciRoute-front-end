import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon,
MDBCarousel, MDBCarouselItem, MDBCarouselCaption, MDBCarouselInner,
MDBView, MDBMask, MDBContainer, MDBFooter, MDBRow, MDBCol} from "mdbreact";
import './PublicHome.css';

export class PublicHome extends Component{

    state = {
        isOpen: false
    };
    
    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }
    
    render(){
        return(

        
        <div className="publicHomeLayout">
            <MDBNavbar color="elegant-color-dark" dark expand="md">
                <MDBNavbarBrand>
                    <img src={process.env.PUBLIC_URL+ "/images/logo.jpg"}
                                    className="logo" alt="Cinque Terre"
                                />
                    <strong className="white-text">BiciRoute</strong>
                    
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.toggleCollapse} />

                <MDBCollapse id="navbarCollapse" isOpen={this.state.isOpen} navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem active>
                            <MDBNavLink to="#!">Home</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="#!">Help</MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>
                    
                    <MDBNavbarNav right className="navbarRight">
                        <MDBNavItem>
                            <MDBNavLink className="waves-effect waves-light" to="#!">
                                <MDBIcon fab icon="twitter" />
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink className="waves-effect waves-light" to="#!">
                                <MDBIcon fab icon="google-plus-g" />
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBDropdown dropleft>
                                    <MDBDropdownToggle nav caret>
                                        <MDBIcon icon="user" />
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu className="dropdown-default">
                                        
                                        <MDBDropdownItem>
                                            <a href="/login">Log in</a>
                                        </MDBDropdownItem>
                                        <MDBDropdownItem>
                                            <a href="/signup">Sign up</a>
                                        </MDBDropdownItem>
                                    </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
            <br/>
            <MDBContainer>
                <MDBCarousel activeItem={1} length={3} showControls={true} showIndicators={true}
                    className="z-depth-1" id="carousel">
                <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                        <MDBView>
                            <img className="d-block w-100"
                                src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                                alt="First slide" />
                            <MDBMask overlay="black-light" />
                        </MDBView>
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive">BiciRoute</h3>
                            <p>An amazing app for amazing people</p>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>

                    <MDBCarouselItem itemId="2">
                        <MDBView>
                            <img className="d-block w-100"
                                src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
                                alt="Second slide" />
                            <MDBMask overlay="black-strong" />
                        </MDBView>
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive">BiciRoute</h3>
                            <p>A special app for cycling warriors</p>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>

                    <MDBCarouselItem itemId="3">
                        <MDBView>
                            <img className="d-block w-100"
                                src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
                                alt="Third slide" />
                            <MDBMask overlay="black-slight" />
                        </MDBView>
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive">BiciRoute</h3>
                            <p>Make friends with us!</p>
                        </MDBCarouselCaption>
                        </MDBCarouselItem>
                    </MDBCarouselInner>
                </MDBCarousel>
            </MDBContainer>

            <MDBFooter color="elegant-color-dark" className="font-small pt-4 mt-4" id="footer">
                <MDBContainer className="text-center text-md-left">
                    <MDBRow className="text-center text-md-left mt-3 pb-3">
                        <MDBCol md="8" lg="8" xl="8" className="mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">
                                BiciRoute
                            </h6>
                            <p>
                                BiciRoute seeks to fight the security issues bikers face on the streets. Biciroute pairs verified cyclists with each other, so they don’t ride alone, as many have been robbed riding
                                alone. Our main goal is to
                                improve cyclists safety and encourage biking as a safe and environmental alternative to traditional modes of
                                transport.
                            </p>
                        </MDBCol>
                        <hr className="w-100 clearfix d-md-none" />
                        <MDBCol md="4" lg="4" xl="4" className="mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Contact US</h6>
                            <p>
                            <i className="fa fa-envelope mr-3" /> biciroute@gmail.com
                            </p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="d-flex align-items-center">
                            <MDBCol md="8" lg="8">
                                <p className="text-center text-md-left grey-text">
                                &copy; {new Date().getFullYear()} Copyright:{" "}
                                <a href="https://biciroute.herokuapp.com"> BiciRoute.com </a>
                                </p>
                            </MDBCol>
                            <MDBCol md="4" lg="4" className="ml-lg-0">
                                <div className="text-center text-md-right">
                                <ul className="list-unstyled list-inline">
                                    <li className="list-inline-item">
                                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                    </li>
                                    <li className="list-inline-item">
                                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                                        <i className="fab fa-twitter" />
                                    </a>
                                    </li>
                                    <li className="list-inline-item">
                                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                                        <i className="fab fa-google-plus" />
                                    </a>
                                    </li>
                                    <li className="list-inline-item">
                                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                                        <i className="fab fa-linkedin-in" />
                                    </a>
                                    </li>
                                </ul>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
            </MDBFooter>

        </div>
        );
    }

}