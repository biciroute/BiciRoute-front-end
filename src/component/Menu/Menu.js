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
        this.state = { showNav: false, selectItem: 1 };
        this.onClick = this.onClick.bind(this);
    }

    onClick(i) {
        this.setState({ selectItem: i })
    }

    render() {
        return (
            <div>
                <MenuIcon onClick={() => this.setState({ showNav: true })} style={{ margin: "3px", fill: "white", position: "absolute", top: 0, left: 0, zIndex: 1 }} />

                <SideNav
                    showNav={this.state.showNav}
                    onHideNav={() => this.setState({ showNav: false })}
                    title={<UserTab />}
                    navStyle={{ maxWidth: "250px", width: "auto" }}
                    items={[

                        <ItemMenu onClick={() => this.onClick(1)} clicked={1 === this.state.selectItem} href="/home" >
                            <LocationOnIcon />
                            <span className="text-list">Find Route</span>
                        </ItemMenu>,
                        <ItemMenu onClick={() => this.onClick(2)} clicked={2 === this.state.selectItem} href="/myProfile">
                            <AssignmentIndIcon />
                            <span className="text-list">My Account</span>
                        </ItemMenu>,
                        <ItemMenu onClick={() => this.onClick(3)} clicked={3 === this.state.selectItem} href="/myroutes">
                            <DirectionsBikeIcon />
                            <span className="text-list">Last Routes</span>
                        </ItemMenu>,
                        <ItemMenu onClick={() => this.onClick(4)} clicked={4 === this.state.selectItem}>
                            <NotificationsIcon />
                            <span className="text-list">Notifications</span>
                        </ItemMenu>,
                        <ItemMenu onClick={() => this.onClick(5)} clicked={5 === this.state.selectItem}>
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
