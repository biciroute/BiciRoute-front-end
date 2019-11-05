import React from 'react';
import MapComponent from '../Map/MapComponent.js';
import MyNavBar from '../MyNavBar/MyNavBar.js';


export class PrivateHome extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            paintRoute  : null
        }
        this.changePaintRoute = this.changePaintRoute.bind(this);
    }

    changePaintRoute(newRoute){
        this.setState({
            paintRoute : newRoute,
        });
    }

    render(){
        return(
            <React.Fragment>
                <MyNavBar/>
                <MapComponent/>
            </React.Fragment>
        );
    }
   
}