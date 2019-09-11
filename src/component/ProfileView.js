import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import ModalModify from './ModalModify';

export default class ProfileView extends Component {
    constructor(props) {
        super(props);
        this.state = { name:localStorage.getItem("nombre")+" "+localStorage.getItem("apellido"), email: localStorage.getItem('correo'), ciudad:'Bogotá, Colombia',followers:200,following:200,trips:0};
        this.handleCorreo=this.handleCorreo.bind();
      }
    
    setCiudad(newCiudad) {
        this.setState({ciudad: newCiudad});
    }
    setCorreo(newCorreo) {
        this.setState({email: newCorreo});
    }
    handleCorreo(){
      this.setState({email:  this.state.email});}
     
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar2.png'}}/>
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
          </View>

          <View style={styles.body}>
            <View style={styles.bodyContent}>  
            <ModalModify style={styles.buttonContainer}></ModalModify> 
            <Text id="email" style={styles.description}>{this.state.email}</Text>
            <Text id="ciudad" style={styles.description}>{this.state.ciudad}</Text>
            </View>
            <View style={styles.photosCard}>
                <Text style={styles.cardTittle}>Friends</Text>   
                <View style={styles.photosContainer}>
                    <Image style={styles.photo} source={{uri: "https://bootdey.com/img/Content/avatar/avatar1.png"}} />
                    <Image style={styles.photo} source={{uri: "https://bootdey.com/img/Content/avatar/avatar2.png"}} />
                    <Image style={styles.photo} source={{uri: "https://bootdey.com/img/Content/avatar/avatar3.png"}} />
                    <Image style={styles.photo} source={{uri: "https://bootdey.com/img/Content/avatar/avatar4.png"}} />
                    <Image style={styles.photo} source={{uri: "https://bootdey.com/img/Content/avatar/avatar5.png"}} />
                    <Image style={styles.photo} source={{uri: "https://bootdey.com/img/Content/avatar/avatar6.png"}} />
                    <Image style={styles.photo} source={{uri: "https://bootdey.com/img/Content/avatar/avatar1.png"}} />
                    <Image style={styles.photo} source={{uri: "https://bootdey.com/img/Content/avatar/avatar2.png"}} />
                    <Image style={styles.photo} source={{uri: "https://bootdey.com/img/Content/avatar/avatar3.png"}} />
                    <Image style={styles.photo} source={{uri: "https://bootdey.com/img/Content/avatar/avatar4.png"}} />
                    <Image style={styles.photo} source={{uri: "https://bootdey.com/img/Content/avatar/avatar5.png"}} />
                    <Image style={styles.photo} source={{uri: "https://bootdey.com/img/Content/avatar/avatar6.png"}} />
                </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#051424",
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  image:{
    width:90,
    height:90,
    borderRadius:45,
  },
  email:{
    marginHorizontal:10
  },
  cardTittle:{
    color:"#808080",
    fontSize:22,
    marginBottom:5,
    textAlign:"left",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  profileDetail:{
    alignSelf: 'center',
    marginTop:200,
    alignItems: 'center',
    flexDirection: 'row',
    position:'absolute',
    backgroundColor: "#ffffff"
  },
  photosContainer:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 'auto',
  },
  photosCard:{
    margin:'auto',
    marginTop:10,
    marginLeft:50,
    marginRight:10,
    position:'relative',
    zIndex: -1
  },
  photo:{
    width:113,
    height:113,
    marginTop:5,
    marginRight:5,
  },
  detailContent:{
    margin:10,
    alignItems: 'center'
  },
  title:{
    fontSize:20,
    color: "#095d7b"
  },
  count:{
    fontSize:18,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
    marginTop:40
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00CED1",
  },
  description:{
    fontSize:20,
    color: "#095d7b",
    marginTop:10,
    textAlign: 'center'
  },
});
 