import React from 'react';
import MapComponent from '../Map/MapComponent.js';
import MyNavBar from '../MyNavBar/MyNavBar.js';
import Grid from '@material-ui/core/Grid';

export class PrivateHome extends React.Component{

    render(){
        return(
            <React.Fragment>
                <MyNavBar />
                <MapComponent></MapComponent>
            </React.Fragment>
        );
    }
   
}