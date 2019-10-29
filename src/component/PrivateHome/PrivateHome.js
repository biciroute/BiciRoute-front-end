import React from 'react';
import MapComponent from '../Map/MapComponent.js';
import MyNavBar from '../MyNavBar/MyNavBar.js';
import RouteForm from '../RouteForm/RouteForm.js';
import { GoogleApiWrapper, Map, Marker, Polyline } from 'google-maps-react';

export class PrivateHome extends React.Component{

    render(){
        return(
            <React.Fragment>
                <MyNavBar/>
                <MapComponent/>
                <RouteForm />
            </React.Fragment>
        );
    }
   
}