import React from 'react';
import MapComponent from '../Map/MapComponent.js';
import MyNavBar from '../MyNavBar/MyNavBar.js';
import RouteForm from '../RouteForm/RouteForm.js';
import { GoogleApiWrapper, Map, Marker, Polyline } from 'google-maps-react';

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
                <MapComponent onChangePaintRoute={this.changePaintRoute}/>
                <RouteForm key={this.changePaintRoute} onChangePaintRoute={this.state.paintRoute}/>
            </React.Fragment>
        );
    }
   
}