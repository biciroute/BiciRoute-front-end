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
import { TextField, MenuItem } from '@material-ui/core';
import UpdateProfileStyles from './UpdateProfileStyles.js'
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import swal from 'sweetalert';
import axios from 'axios';

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
    const [name, setName] = React.useState(props.user.firstName);
    const [email] = React.useState(props.user.email);
    const [color, setColor] = React.useState(props.bici  ? props.bici.color : "");
    const [brand, setBrand] = React.useState(props.bici  ? props.bici.brand : "");
    const [password, setPassword] = React.useState(props.user.password);
    const [showPassword, setShowPassword] = React.useState(false);

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleColorChange = (e) => {
        setColor(e.target.value);
    }

    const handleBrandChange = (e) => {
        setBrand(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = event => {
        event.preventDefault();
    };

    const hex = (length, n) => {
        n = n.toString(16);
        return (n.length === length) ? n : "00000000".substring(n.length, length) + n;
    }

    const jsonToStringId = (json) => {
        var idToParse = json
        var idString = hex(8, idToParse.timestamp) + hex(6, idToParse.machineIdentifier) + hex(4, idToParse.processIdentifier) + hex(6, idToParse.counter);
        return idString
    }



    const handleSaveChanges = () => {
        var info = {
            _id :  localStorage.getItem("userId"),
            firstName: name,
            lastName: props.user.lastName,
            email: email,
            password: password
        }


        if( brand != "" || color != "" ){
            let bike = {
                brand: brand,
                color: color
            }

            if(props.bici != null ){
                bike["_id"] = jsonToStringId(props.bici._id);
            }

            info["bicicle"] = bike;
        }

        console.log(info)
        console.log(props.bici)

        localStorage.setItem("info", info);
        axios.put('http://localhost:8080/v1/user', info)
            .then((response) => {
                console.log(response.data);
                swal({
                    title: "Good job",
                    text: "You have updated your profile sucessfully",
                    icon: "success",
                    timer: 2000,
                    button: false,
                }).then(() => {
                    props.onClose();
                });
            }).catch(function (error) {
                swal({
                    title: "Ooops!",
                    text: "Fail update profile",
                    icon: "error",
                    timer: 2000,
                    button: false,
                });
            });

    }

    return (
        <React.Fragment>
            <Dialog style={{ margin: "auto" }} onClose={props.onClose} aria-labelledby="customized-dialog-title" open={props.open}>
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
                                    value={name}
                                    onChange={handleNameChange}
                                    className={clsx(classes.textField, classes.dense)}
                                    margin="dense"
                                />
                                <br />
                                <TextField
                                    id="standard-email"
                                    label="Email"
                                    value={email}
                                    className={clsx(classes.textField, classes.dense)}
                                    margin="dense"
                                />
                                <br />
                                <FormControl className={clsx(classes.margin, classes.textField)}>
                                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                    <Input
                                        id="standard-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={handlePasswordChange}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                >
                                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="h6" gutterBottom>Bici Settings</Typography>
                                <Divider />
                                <TextField
                                    select
                                    id="standard-marca"
                                    label="Brand"
                                    className={clsx(classes.textField, classes.dense)}
                                    onChange={handleBrandChange}
                                    value={brand}
                                    defaultValue={brand}
                                    margin="auto"
                                >{brands.map(option => (<MenuItem key={option.value} value={option.value}>
                                    {option.value}</MenuItem>))}
                                </TextField>
                                <br />
                                <TextField
                                    select
                                    id="standard-color"
                                    label="Color"
                                    value={color}
                                    defaultValue={color}
                                    onChange={handleColorChange}
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
                    <Button autoFocus onClick={handleSaveChanges} color="primary">
                        Save changes
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
