import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';
import ModalModify from './ModalModify';
import ModalModifyBici from './ModalModifyBici';
import Box from '@material-ui/core/Box';
import './ModalModify.css';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import { MDBCol, MDBRow } from "mdbreact";
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import axios from 'axios'
import swal from 'sweetalert';
import MyProfileStyles from './MyProfileStyles.js';


const styles = MyProfileStyles;

export default class ProfileView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: true,
      name: "", email: "", ciudad: "Bogotá, Colombia", followers: 200, following: 200, 
      trips: Math.floor(Math.random() * 150), distanceTraveled: Math.floor(Math.random() * 300),
      marca:"", color: "", user : {}, bici : {}
    };

    this.handleCorreo = this.handleCorreo.bind(this);
    this.handleProfile = this.handleProfile.bind(this);
  }

 

  setCiudad(newCiudad) {
    this.setState({ ciudad: newCiudad });
  }
  setCorreo(newCorreo) {
    this.setState({ email: newCorreo });
  }
  handleCorreo() {
    this.setState({ email: this.state.email });
  }

  handleProfile(profile) {
    this.setState({ profile: profile });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Box display="flex">
              <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar2.png' }} />
            </Box>
            <Text id="name" style={styles.name}>
              {this.state.name}
            </Text>
          </View>
        </View>

        <View style={styles.profileDetail}>
          <View style={styles.detailContent}>
            <Text style={styles.title}>My Trips</Text>
            <Text id="trips" style={styles.count}>{this.state.trips}</Text>
          </View>
          <View style={styles.detailContent}>
            <Text style={styles.title}>Followers</Text>
            <Text id="followers" style={styles.count}>{this.state.followers}</Text>
          </View>
          <View style={styles.detailContent}>
            <Text style={styles.title}>Following</Text>
            <Text id="following" style={styles.count}>{this.state.following}</Text>
          </View>
          <View style={styles.detailContent}>
            <Text style={styles.title}>Traveled</Text>
            <Text id="traveled" style={styles.count}>{this.state.distanceTraveled} Km</Text>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link color="inherit" onClick={() => this.handleProfile(true)} >
                <HomeIcon style={{ marginRight: '3px' }} />
                My Profile
                </Link>
              <Link color="inherit" onClick={() => this.handleProfile(false)}  >
                <DirectionsBikeIcon style={{ marginRight: '5px' }} />
                My Bici Profile
                </Link>
            </Breadcrumbs>
            {this.state.profile ? (

              <View id="myProfile" style={styles.bodyContent2}>
                <MDBRow>
                  <MDBCol md="6" className="mb-1">
                    <View style={styles.detailContent}>
                      <Text style={styles.title}>Trips Badge</Text>
                      <Text id="TripBadge" style={styles.count}>{TripBadge(this.state.trips)}</Text>
                    </View>
                  </MDBCol>
                  <MDBCol md="6" className="mb-1">
                    <View style={styles.detailContent}>
                      <Text style={styles.title}>Dist. Badge</Text>
                      <Text id="DistanceBadge" style={styles.count}>{DistanceBadge(this.state.distanceTraveled)}</Text>
                    </View>
                  </MDBCol>
                </MDBRow>
                <Text id="email" style={styles.description}>{this.state.email}</Text>
                <Text id="ciudad" style={styles.description}>{this.state.ciudad}</Text>
                <ModalModify style={styles.buttonContainer} user={this.state.user} ></ModalModify>
              </View>
            ) : (
                <View id="myBiciProfile" style={styles.bodyContent2}>
                  <Text id="marca" style={styles.description}>Brand: {this.state.marca}</Text>
                  <Text id="color" style={styles.description}>Color: {this.state.color}</Text>
                  <ModalModifyBici style={styles.buttonContainer} bici={this.state.bici} ></ModalModifyBici>
                </View>)}
          </View>
          <View style={styles.photosCard}>
            <Text style={styles.cardTittle}>Friends</Text>
            <View style={styles.photosContainer}>
              <Image style={styles.photo} source={{ uri: "https://bootdey.com/img/Content/avatar/avatar1.png" }} />
              <Image style={styles.photo} source={{ uri: "https://bootdey.com/img/Content/avatar/avatar2.png" }} />
              <Image style={styles.photo} source={{ uri: "https://bootdey.com/img/Content/avatar/avatar3.png" }} />
              <Image style={styles.photo} source={{ uri: "https://bootdey.com/img/Content/avatar/avatar4.png" }} />
              <Image style={styles.photo} source={{ uri: "https://bootdey.com/img/Content/avatar/avatar5.png" }} />
              <Image style={styles.photo} source={{ uri: "https://bootdey.com/img/Content/avatar/avatar6.png" }} />
              <Image style={styles.photo} source={{ uri: "https://bootdey.com/img/Content/avatar/avatar1.png" }} />
              <Image style={styles.photo} source={{ uri: "https://bootdey.com/img/Content/avatar/avatar2.png" }} />
              <Image style={styles.photo} source={{ uri: "https://bootdey.com/img/Content/avatar/avatar3.png" }} />
              <Image style={styles.photo} source={{ uri: "https://bootdey.com/img/Content/avatar/avatar4.png" }} />
              <Image style={styles.photo} source={{ uri: "https://bootdey.com/img/Content/avatar/avatar5.png" }} />
              <Image style={styles.photo} source={{ uri: "https://bootdey.com/img/Content/avatar/avatar6.png" }} />
            </View>
          </View>
        </View>
      </View>
    );
  }

  UNSAFE_componentWillMount() {
    this.axios = axios.create({
      baseURL: 'http://localhost:8080/',
      timeout: 1000,
      headers: { 'Authorization': 'Bearer ' + localStorage.getItem("accessToken") }
    });

    this.fetchTaks();
  }

  

  fetchTaks() {
    let Profile = this
    this.axios.get('http://localhost:8080/v1/user/5db53231895d2a050cb2f821')
      .then(function (response) {
        let user = response.data
        Profile.setState({name:user.firstName+" "+user.lastName, email: user.email, marca: user.bicicle.brand , color: user.bicicle.color, 
        user : user, bici : user.bicicle  });             
      })
      .catch(function (error) {
        swal({
          title: "Ooops!",
          text: "This page could not be loaded. Please refresh the page.",
          icon: "error",
          timer: 2000,
          button: false,
        });
      });

  }

}

function TripBadge(trips) {
  if (trips < 10) {
    return ("Router Baby");
  } else if (trips < 50) {
    return ("Router Junior");
  } else if (trips < 100) {
    return ("Router Senior");
  } else {
    return ("Router Pro");
  }
}

function DistanceBadge(km) {
  if (km < 20) {
    return ("Baby Biker");
  } else if (km < 100) {
    return ("Junior Biker");
  } else if (km < 250) {
    return ("Senior Biker");
  } else {
    return ("Pro Biker");
  }


}