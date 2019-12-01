import React from 'react';
import MapComponent from '../Map/MapComponent.js';
import MyNavBar from '../MyNavBar/MyNavBar.js';

export class PrivateHome extends React.Component{

    render(){
        return(
            <React.Fragment>
                <MyNavBar/>
                <MapComponent/>
            </React.Fragment>
        );
    }
   
}