import React, {Component} from 'react';
import {RouteList} from '../RouteList/RouteList.js';
import axios from 'axios';
import swal from 'sweetalert';
import MyAppBar from '../MyAppBar/MyAppBar.js';
import MyRoutesStyles from './MyRoutesStyles.js';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreSharpIcon from '@material-ui/icons/RestoreSharp';
import UpdateSharpIcon from '@material-ui/icons/UpdateSharp';
import BottomNavbar from '../BottomNavbar/BottomNavbar.js';

export class MyRoutes extends Component{

    constructor(props){
        super(props);
        this.state = {
            routeList: [
                {
                    origin: "escuelaing",
                    destination: "santafe",
                    date: "27 oct 2019, 9:14"
                },{
                    origin: "el chorro",
                    destination: "santafe",
                    date: "25 oct 2019, 15:12"
                },{
                    origin: "los andes",
                    destination: "la escuela",
                    date: "25 sep 2019, 17:20"
                },
                {
                    origin: "santafe",
                    destination: "calle 100",
                    date: "14 jan 2020, 9:14"
                },{
                    origin: "calle 100",
                    destination: "aeropuerto el dorado",
                    date: "16 dec 2019, 19:12"
                }
            ],
            pastRoutes: [
                {
                    origin: "escuelaing",
                    destination: "santafe",
                    date: "27 oct 2019, 9:14"
                },{
                    origin: "el chorro",
                    destination: "santafe",
                    date: "25 oct 2019, 15:12"
                },{
                    origin: "los andes",
                    destination: "la escuela",
                    date: "25 sep 2019, 17:20"
                }
            ],
            upcomingRoutes: [
                {
                    origin: "santafe",
                    destination: "calle 100",
                    date: "14 jan 2020, 9:14"
                },{
                    origin: "calle 100",
                    destination: "aeropuerto el dorado",
                    date: "16 dec 2019, 19:12"
                }
            ],
            value: 0
        }
    }


    
    render(){
        return (
            <React.Fragment>
                <MyAppBar title="My routes"/>
                <div id="routeList"style={{marginBottom: "50px"}}>
                    <RouteList key={this.state.value}
                        routeList={(this.state.value===0)?this.state.pastRoutes:this.state.upcomingRoutes}
                    />
                </div>
                
                <BottomNavigation
                    value={this.state.value}
                    onChange={(event, newValue) => {
                        this.setState({
                            value: newValue
                        })
                    }}
                    showLabels
                    style={{
                            width: '100%',
                            position: 'fixed',
                            bottom: 0,
                            backgroundColor: "#FFFFFA",
                    }}
                    >
                    <BottomNavigationAction label="past" icon={<RestoreSharpIcon />} />
                    <BottomNavigationAction label="upcoming" icon={<UpdateSharpIcon />} />
                </BottomNavigation>
            </React.Fragment>
        );
    }
}
