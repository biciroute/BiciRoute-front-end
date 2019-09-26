import React, { Component } from 'react';
import {
  StyleSheet,
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

export default class ProfileView extends React.Component {
  constructor(props) {
    super(props);
    var user = JSON.parse(localStorage.getItem("loggedUser"));
    this.state = {
      profile: true,
      name: user.firstName+" "+user.lastName,
      email: user.email, ciudad: 'Bogotá, Colombia', followers: 200, following: 200, trips: Math.floor(Math.random() * 150), distanceTraveled: Math.floor(Math.random() * 300),
      marca: user.bici.brand, color: user.bici.color
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
                <ModalModify style={styles.buttonContainer}></ModalModify>
              </View>
            ) : (
                <View id="myBiciProfile" style={styles.bodyContent2}>
                  <Text id="marca" style={styles.description}>Brand: {this.state.marca}</Text>
                  <Text id="color" style={styles.description}>Color: {this.state.color}</Text>
                  <ModalModifyBici style={styles.buttonContainer}></ModalModifyBici>
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
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#051424",
  },
  headerContent: {
    padding: 30,
    alignItems: 'center',
  },
  icons: {
    marginLeft: 5,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  email: {
    marginHorizontal: 10
  },
  cardTittle: {
    color: "#808080",
    fontSize: 22,
    marginBottom: 5,
    textAlign: "left",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
  },
  bici: {
    width: 90,
    height: 90,
    borderRadius: 53,
    borderWidth: 2,
    borderColor: "white",
    marginTop: 40,
    marginLeft: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: '600',
  },
  profileDetail: {
    alignSelf: 'center',
    marginTop: 200,
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: "#ffffff"
  },
  badgesDetail: {
    alignSelf: 'center',
    marginTop: 200,
    alignItems: 'center',
    flexDirection: 'col',
    position: 'absolute',
    backgroundColor: "#ffffff"
  },
  photosContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 'auto',
  },
  photosCard: {
    margin: 'auto',
    marginTop: 10,
    marginLeft: 50,
    marginRight: 10,
    position: 'relative',
    zIndex: -1
  },
  photo: {
    width: 113,
    height: 113,
    marginTop: 5,
    marginRight: 5,
  },
  detailContent: {
    margin: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    color: "#095d7b"
  },
  count: {
    fontSize: 18,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
    marginTop: 40
  },
  bodyContent2: {
    flex: 1,
    maxwith:'100%',
    maxHeight:'100%',
    alignItems: 'center',
    padding: 10,
    marginBottom: 5
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 100,
    borderRadius: 30,
    backgroundColor: "#00CED1",
  },
  description: {
    fontSize: 20,
    color: "#095d7b",
    marginTop: 10,
    textAlign: 'center'
  },
  container: {
    marginLeft: 0
  }
});

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