import React from 'react';
import SideNav, { MenuIcon } from 'react-simple-sidenav';
import "./Menu.css"
import {UserTab} from './UserTab'
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import HelpIcon from '@material-ui/icons/Help';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd'


export class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showNav: true };
    }

    render() {
        return (
            <div>
                <MenuIcon onClick={() => this.setState({ showNav: true })} style={{fill:"black"}}/>

                <SideNav
                    showNav={this.state.showNav}
                    onHideNav={() => this.setState({ showNav: false })}
                    title={<UserTab />}
                    navStyle={{maxWidth : "300px" }}
                    items={[
                            <LocationOnIcon />,
                            <AssignmentIndIcon />,
                            <DirectionsBikeIcon />,
                            <NotificationsIcon />,
                            <HelpIcon />
                        
                    ]}
                    titleStyle={{ backgroundColor: '#4CAF50', lineHeight : "normal" }}
                    itemStyle={{ backgroundColor: '#fff' }}
                    itemHoverStyle={{ backgroundColor: '#CDDC39' }} />
            </div>

        );
    }
}
