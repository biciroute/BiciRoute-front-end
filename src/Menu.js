import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import HelpIcon from '@material-ui/icons/Help';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import NotificationsIcon from '@material-ui/icons/Notifications';
import React from 'react';
import SideNav, { MenuIcon } from 'react-simple-sidenav';
import { ItemMenu } from './ItemMenu';
import './Menu.css';
import { UserTab } from './UserTab';


export class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showNav: false, selectItem: 0 };
    }

    render() {
        return (
            <div>
                <MenuIcon onClick={() => this.setState({ showNav: true })} style={{ fill: "black" }} />

                <SideNav
                    showNav={this.state.showNav}
                    onHideNav={() => this.setState({ showNav: false })}
                    title={<UserTab />}
                    navStyle={{ maxWidth: "250px" }}
                    items={[
                        <ItemMenu >
                            <LocationOnIcon />
                            <span className="text-list">Find Route</span>
                        </ItemMenu>,
                        <ItemMenu >
                            <AssignmentIndIcon />
                            <span className="text-list">My Account</span>
                        </ItemMenu>,
                        <ItemMenu >
                            <DirectionsBikeIcon />
                            <span className="text-list">Last Trips</span>
                        </ItemMenu>,
                        <ItemMenu >
                            <NotificationsIcon />
                            <span className="text-list">Notifications</span>
                        </ItemMenu>,
                        <ItemMenu >
                            <HelpIcon />
                            <span className="text-list">Help</span>
                        </ItemMenu>,


                    ]}
                    titleStyle={{ backgroundColor: '#4CAF50', lineHeight: "normal" }}
                    itemStyle={{ backgroundColor: '#fff', padding: "0px" }}
                    itemHoverStyle={{ backgroundColor: '#fff' }} />
            </div>

        );
    }
}
