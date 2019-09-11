import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import HelpIcon from '@material-ui/icons/Help';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SideNav, { NavIcon, NavItem, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './Menu.css';
import { UserTab } from "./UserTab";
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import { Home } from './component/Home.js';
import ProfileView from './component/ProfileView';


export class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = { toggle: false }
        this.onToggleNav = this.onToggleNav.bind(this);
    }

    render() {
        let img
        if (this.state.toggle) {
            img = <UserTab eventKey="profile" />
        }
        return (
            <Router>
                <Route render={({ location, history }) => (
                    <React.Fragment>
                        <SideNav
                            onSelect={(selected) => {
                                const to = '/' + selected;
                                if (location.pathname !== to) {
                                    history.push(to);
                                    console.log(history)
                                }
                            }}

                            onToggle={this.onToggleNav}
                            
                            className={this.state.toggle ? "nav-toogle" : null , "fixed-nav"}
                        >
                            <SideNav.Toggle />
                            <SideNav.Nav defaultSelected="home">
                                {img}
                                <NavItem eventKey="home">
                                    <NavIcon>
                                        <LocationOnIcon />
                                    </NavIcon>
                                    <NavText>
                                        <span className="nav-text">Find Route</span>
                                    </NavText>
                                </NavItem>
                                <NavItem eventKey="myProfile">
                                    <NavIcon>
                                        <AssignmentIndIcon />
                                    </NavIcon>
                                    <NavText>
                                        <span className="nav-text">My Account</span>
                                    </NavText>
                                </NavItem>
                                <NavItem eventKey="trip">
                                    <NavIcon>
                                        <DirectionsBikeIcon />
                                    </NavIcon>
                                    <NavText>
                                        <span>My trips</span>
                                    </NavText>
                                </NavItem>
                                <NavItem eventKey="notifications">
                                    <NavIcon>
                                        <NotificationsIcon />
                                    </NavIcon>
                                    <NavText>
                                        <span>Notifications</span>
                                    </NavText>
                                </NavItem>
                                <NavItem eventKey="help">
                                    <NavIcon>
                                        <HelpIcon />
                                    </NavIcon>
                                    <NavText>
                                        <span>Help</span>
                                    </NavText>
                                </NavItem>
                            </SideNav.Nav>
                        </SideNav>
                        <main>
                            <Switch>
                                <Route path="/home" component={props => <Home />} />
                                <Route path="/myProfile" component={props => <ProfileView />} />
                            </Switch>
                        </main>
                    </React.Fragment>
                )}
                />
            </Router>
        );
    }



    onToggleNav(value) {
        this.setState({ toggle: value });
    }
}
