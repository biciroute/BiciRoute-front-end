import React from 'react';
import { GoogleApiWrapper, Map, Marker, } from 'google-maps-react';
import "./Map.css"
import Button from '@material-ui/core/Button';
import NavigationIcon from '@material-ui/icons/Navigation';
import Modal from '@material-ui/core/Modal';
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Script from 'react-load-script';
import SearchBar from './SearchBar';




const mapStyles = {
    width: '100%',
    height: '100%',
};


const useStyles = theme => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
});




class MapComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            university: { lat: 4.782715, lng: -74.042611 },
            open: false,
        };
        this.handleClose = this.handleClose.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.autocomplete = this.autocomplete.bind(this);

    }

    setRefInput(ref) {
        this.autocomplete = ref;
    }

    handleClose(e) {
        this.setState({
            open: false
        });
    }

    rand() {
        return Math.round(Math.random() * 20) - 10;
    }

    getModalStyle() {
        const top = 50 + this.rand();
        const left = 50 + this.rand();
        console.log(" test " + top + "  " + left)

        return {
            top: `${top}%`,
            left: `${left}%`,
            transform: `translate(-${top}%, -${left}%)`,
        };
    }

    handleOpen(e) {
        this.setState({
            open: true
        })
    }


    autocomplete() {
        const { google, map } = this.props;
        if (!google || !map) return;
        window.alert("funciona")
        var src = document.getElementById("source");
        window.alert(src);
        //var tgt = document.getElementById('target');
        var autoSrc = new google.maps.places.Autocomplete(src);
        autoSrc.bindTo('bounds', map);
        autoSrc.setFields(['address_components', 'geometry', 'icon', 'name']);

    }

    //https://stackoverflow.com/questions/26059762/callback-when-dom-is-loaded-in-react-js
    componentDidMount() {
        this.autocomplete();
        /*if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.setCurrentPosition)
        }*/
    }

    componentDidUpdate(prevProps) {
        if (this.props.map !== prevProps.map) this.autocomplete();
    }


    // getModalStyle is not a pure function, we roll the style only on the first render

    render() {
        const { classes } = this.props;
        const modalStyle = this.getModalStyle;
        // const {modalStyle} = React.useState(getModalStyle);
        return (
            <div >
                <Map
                    className="map"
                    google={this.props.google}
                    zoom={15}
                    style={mapStyles}
                    initialCenter={this.state.university}
                >
                    <Marker
                        title={'Escuela colombiana de ingenieria Julio Garavito'}
                        position={this.state.university}
                        animation={this.props.google.maps.Animation.DROP}
                        name={'Escuela colombiana de ingenieria Julio Garavito'}
                        description={'AK 45 #205-59 Bogota\nInstitucion universitaria'}
                    />
                    <Button title="Begin your route with biciRoute" variant="contained" color="primary" onClick={this.handleOpen} id="buttonSearch" aria-label="delete" >
                        <NavigationIcon /> Search trip
                    </Button>
                </Map>



                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <div className={classes.paper}>
                        <TextField
                            id='source'
                            type="search"
                            className={classes.textField}
                            margin="normal"
                        />
                        <h2 id="simple-modal-title">Text in a modal</h2>
                        <p id="simple-modal-description">
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </p>
                    </div>
                </Modal>
            </div>
        );
    }

}
//https://es.reactjs.org/docs/hooks-reference.html#usestate
MapComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

const MapWrapper = props => (
    <div className="unAbsolute">
        <Map className="map" google={props.google} visible={false}>
            <MapComponent {...props} />
        </Map>
    </div>
);

export default withStyles(useStyles)(GoogleApiWrapper({
    apiKey: '',
    language: "es",
})(MapWrapper));