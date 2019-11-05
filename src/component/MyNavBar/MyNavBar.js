import React from "react";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Fab from '@material-ui/core/Fab';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HelpIcon from '@material-ui/icons/Help';
import Box from '@material-ui/core/Box';
import MyNavBarStyles from "./MyNavBarStyles.js";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MapIcon from '@material-ui/icons/Map';
import ListItemLink from '../ListItemLink/ListItemLink.js';

export default function MyMenu() {
    const classes = MyNavBarStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    function handleDrawerOpen() {
        setOpen(true);
    }

    function handleDrawerClose() {
        setOpen(false);
    }

    function handleSignOut(){
        localStorage.removeItem('loggedUser');
        localStorage.removeItem('isLoggedIn');
        window.location.href = "/login";
    }

    return(
        <div className={classes.root}>
            
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                [classes.appBarShift]: open
                })}
                display="flex"
                >
                <Box display="flex" margin={0}>
                    <Box alignContent="flex-start" flexGrow={1}>
                        <Toolbar>
                            <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={handleDrawerOpen}
                                    edge="start"
                                    className={clsx(classes.menuButton, open && classes.hide)}
                                >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" noWrap>
                                BiciRoute
                            </Typography>
                        </Toolbar>
                    </Box>
                </Box>
            </AppBar>
            
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                paper: classes.drawerPaper
                }}
                >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose} className={classes.icon}>
                        {theme.direction === "ltr" ? (
                        <ChevronLeftIcon />
                        ) : (
                        <ChevronRightIcon />
                        )}
                    </IconButton>
                </div>
                
                <Grid container justify="center" alignItems="center">
                    <Box flexDirection="column" alignItems="center" justify="center" flexWrap="nowrap">
                        <Avatar alt="profile picture" justify="center" id="profilePicture" className={classes.profilePicture}
                            src="https://bootdey.com/img/Content/avatar/avatar2.png"
                            style={{width: 150, height: 150}} />
                        <Typography variant="h6" noWrap align="center" style={{maxWidth: "160px", marginLeft: "auto", marginRight: "auto"}}>
                            {JSON.parse(localStorage.getItem("loggedUser")).firstName}
                        </Typography>
                    </Box>
                </Grid>
                <Divider style={{marginTop: 20, margin:20, color: "#FFFFFA"}}/>
                
                <List>
                    <ListItemLink
                        icon={<AccountCircleIcon />}
                        primary="My profile"
                        to="/myProfile"
                    />
                    <ListItemLink
                        icon={<MapIcon />}
                        primary="My routes"
                        to="/myroutes"
                    />
                    <ListItemLink
                        icon={<NotificationsIcon />}
                        primary="Notifications"
                        to="/#"
                    />
                    <ListItemLink
                        icon={<HelpIcon />}
                        primary="Help"
                        to="/#"
                    />
                    
                    <ListItem>
                        <Fab variant="extended" size="small" className={classes.fab} onClick={handleSignOut}>
                            <ExitToAppIcon style={{color:"#212121"}}/>
                            <Typography variant="button" noWrap style={{color:"#212121"}}>
                                Sign out
                            </Typography>
                        </Fab>
                    </ListItem>
                </List>
            </Drawer>
            <main
                className={clsx(classes.content, {
                [classes.contentShift]: open
                })}
            >
            </main>
        </div>
    );
}
