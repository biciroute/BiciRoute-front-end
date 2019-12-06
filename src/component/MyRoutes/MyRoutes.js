import React from 'react';
import {RouteList} from '../RouteList/RouteList.js';
import MyAppBar from '../MyAppBar/MyAppBar.js';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreSharpIcon from '@material-ui/icons/RestoreSharp';
import UpdateSharpIcon from '@material-ui/icons/UpdateSharp';
import swal from 'sweetalert';
import axios from 'axios';

export class MyRoutes extends React.Component{

    constructor(props){
        
        super(props);
        this.state = {
            routeList: [], pastRoutes: [], upcomingRoutes: [],
            value: 1,
        }
        this.axios= axios.create({
            baseURL: 'http://localhost:8080/v1',
            timeout: 2000,
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem("accessToken")}
          });

    }

    componentDidMount(){
        this.axios.get('/routes/user/'+ localStorage.getItem("userId"))
        .then((response)=>{
            this.setState({
                routeList: [], pastRoutes: [], upcomingRoutes: []
            });
            var routes = response.data;
            for(var i=0; i<routes.length; i++){
                console.log(routes[i]);
                var origin = {
                    lat: parseFloat(routes[i].origin.latitude),
                    lng: parseFloat(routes[i].origin.longitude),
                    address: routes[i].origin.address
                };
                var destination = {
                    lat: parseFloat(routes[i].destination.latitude), 
                    lng: parseFloat(routes[i].destination.longitude),
                    address: routes[i].destination.address
                };
                
                var commonRoute = {
                    origin:{
                        lat: parseFloat(routes[i].commonRoute.origin.latitude),
                        lng: parseFloat(routes[i].commonRoute.origin.longitude),
                        address: routes[i].commonRoute.origin.address
                    },
                    destination:{
                        lat: parseFloat(routes[i].commonRoute.destination.latitude),
                        lng: parseFloat(routes[i].commonRoute.destination.longitude),
                        address: routes[i].commonRoute.destination.address
                    },
                    hour: routes[i].commonRoute.hour,
                    timestamp:  new Date(routes[i].commonRoute.hour).getTime()
                }
                var route = {origin: origin, destination: destination, commonRoute: commonRoute};

                var timeRoute = new Date(routes[i].commonRoute.hour);
                var currentTime = new Date();
                commonRoute.hour = timeRoute.getDay()+"/"+
                    timeRoute.getMonth()+"/"+timeRoute.getFullYear()+" "+timeRoute.getHours()+":"+timeRoute.getMinutes();
                if(currentTime.getTime()>=timeRoute.getTime()){
                    this.setState(prevState => ({
                        pastRoutes: [...prevState.pastRoutes, route]
                    }))
                }else{
                    this.setState(prevState => ({
                        upcomingRoutes: [...prevState.upcomingRoutes, route]
                    }));
                }
            }
        }).catch((error)=>{
            console.log(error);
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