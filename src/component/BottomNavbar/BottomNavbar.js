import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import RestoreSharpIcon from '@material-ui/icons/RestoreSharp';
import UpdateSharpIcon from '@material-ui/icons/UpdateSharp';

const useStyles = makeStyles(theme => ({
  bottomNavigation: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
}));

export default function BottomAppBar(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <React.Fragment>
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.bottomNavigation}
            >
            <BottomNavigationAction className={classes.item} label="past" icon={<RestoreSharpIcon className={classes.icon}/>} />
            <BottomNavigationAction className={classes.item} label="upcoming" icon={<UpdateSharpIcon className={classes.icon}/>} />
        </BottomNavigation>
    </React.Fragment>
  );
}
