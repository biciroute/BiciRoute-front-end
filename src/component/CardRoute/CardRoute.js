import React, {Component} from 'react';
import { MDBCard, MDBCardBody, MDBCardImage} from 'mdbreact';
import './CardRoute.css';

export class CardRoute extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            flipped: false
        }
        this.handleFlipping = this.handleFlipping.bind(this);
        this.handleCardClick = this.handleCardClick.bind(this);
    }

    handleFlipping = () =>{
        this.setState({
            flipped: !this.state.flipped
        });
    }

    handleCardClick(event){
        alert("handling click");
    }

    render(){
        return(
            <div className="cardRoute">
                {/*<MDBCard>
                    <a onClick={this.handleCardClick}>
                    <MDBCardImage className="img-fluid" src={process.env.PUBLIC_URL+ "/images/map.PNG"} waves />
                    <MDBCardBody>
                        <div className="card-title d-flex">
                            <div>From {this.props.origin} To {this.props.destination}</div>
                            <div className="ml-auto">{this.props.date}</div>
                        </div>
                    </MDBCardBody>
                    </a>
                </MDBCard>*/}
            </div>
            
        );        
    }

}