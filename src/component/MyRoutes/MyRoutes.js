import React, {Component} from 'react';
import {RouteList} from '../RouteList/RouteList.js';
import MyAppBar from '../MyAppBar/MyAppBar.js';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreSharpIcon from '@material-ui/icons/RestoreSharp';
import UpdateSharpIcon from '@material-ui/icons/UpdateSharp';
import swal from 'sweetalert';
import axios from 'axios';
import Geocode from 'google-maps-react';

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
            value: 1,
        }
        this.axios= axios.create({
            baseURL: 'https://biciroute-api.herokuapp.com/',
            timeout: 1000,
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem("accessToken")}
          });
    }
    

    componentDidMount(){
        this.axios.get('https://biciroute-api.herokuapp.com/v1/routes/user/'+ localStorage.getItem("userId"))
        .then((response)=>{
            this.setState({
                routeList: [],
                pastRoutes: [],
                upcomingRoutes: []
            });
            var routes = response.data
            console.log("MY ROUTES");
            console.log(routes);
            for(var i=0; i<routes.length; i++){
                var origin = "Origin->["+routes[i].origin.latitude+","+routes[i].origin.longitude+"]";
                var destination = "Destination->["+routes[i].destination.latitude+","+routes[i].destination.longitude+"]";
                var date = routes[i]._id.date
                var timestamp = routes[i]._id.timestamp
                var route = {origin, destination, date}
                var currentTimeInMs = Math.floor(Date.now() / 1000);
                if(currentTimeInMs>=timestamp){
                    this.setState(prevState => ({
                        pastRoutes: [...prevState.pastRoutes, route]
                    }))
                }else{
                    this.setState(prevState => ({
                        upcomingRoutes: [...prevState.upcomingRoutes, route]
                    }))
                }
            }
        }).catch((error)=>{
            swal({
                title: "Ooops!",
                text: "Something happened!!. Please, try again!",
                icon: "error",
                timer: 2000,
                button: false
            }).then(()=>{
                //window.location.reload();
            });
        });
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
