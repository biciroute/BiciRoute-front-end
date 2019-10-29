import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { TextField } from '@material-ui/core';
import UpdateProfileStyles from './UpdateProfileStyles.js'
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import { MenuItem } from '@material-ui/core';

const styles = theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)(props => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

const brands = [
    { value: "Eline" }, { value: "Fox" }, { value: "GW" }, { value: "IceToolz" }, { value: "KMC" }, { value: "millenium" }, { value: "PRO" }, { value: "Raleigh" }, { value: "ritchey" }, { value: "scott" }, { value: "otro" }
]
const colors = [
    { value: "Negro" }, { value: "Blanco" }, { value: "Amarillo" }, { value: "Rojo" }, { value: "Verde" }, { value: "Gris" }, { value: "Azul" }, { value: "Morado" }, { value: "Rosado" }, { value: "otro" }
]
const atributos = [
    { value: "Bastidor" }, { value: "3 Ruedas" }, { value: "2 Ruedas" }, { value: "Manillar" }, { value: "Sillín" }, { value: "Luz" }, { value: "Puños" }, { value: "Velocímetro" }, { value: "Suspensión" }, { value: "Cierres rápidos" }, { value: "Amortiguación" }
]

export default function UpdateProfile(props) {

    const classes = UpdateProfileStyles();

    return (
        <div>
            <Dialog onClose={props.onClose} aria-labelledby="customized-dialog-title" open={props.open}>
                <DialogTitle id="customized-dialog-title" variant="h3" style={{ margin: "auto" }} onClose={props.onClose}> Edit Profile </DialogTitle>
                <DialogContent dividers>
                    <div className={classes.root}>
                        <Grid container spacing={3}>
                            <Grid item xs={6}>
                                <Typography variant="h6" gutterBottom>Account Settings</Typography>
                                <Divider />
                                <TextField
                                    id="standard-name"
                                    label="Name"
                                    value={props.state.name}
                                    className={clsx(classes.textField, classes.dense)}
                                    margin="dense"
                                />
                                <br />
                                <TextField
                                    id="standard-email"
                                    label="Email"
                                    value={props.state.email}
                                    className={clsx(classes.textField, classes.dense)}
                                    margin="dense"
                                />
                                <br />
                                <TextField
                                    id="standard-city"
                                    label="City"
                                    value={props.state.ciudad}
                                    className={clsx(classes.textField, classes.dense)}
                                    margin="dense"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="h6" gutterBottom>Bici Settings</Typography>
                                <Divider />
                                <TextField
                                    select
                                    id="standard-marca"
                                    label="Brand"
                                    value={props.state.marca}

                                    className={clsx(classes.textField, classes.dense)}
                                    margin="auto"
                                >{brands.map(option => (<MenuItem key={option.value} value={option.value}>
                                    {option.value}</MenuItem>))}
                                </TextField>
                                <br />
                                <TextField
                                    select
                                    id="standard-color"
                                    label="Color"
                                    value={props.state.color}
                                    className={clsx(classes.textField, classes.dense)}
                                    margin="dense"
                                >
                                    {colors.map(option => (<MenuItem key={option.value} value={option.value}>
                                        {option.value}</MenuItem>))}
                                </TextField>
                                <br />
                            </Grid>
                        </Grid>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={props.onClose} color="primary">
                        Save changes
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
