import React, { Component } from 'react';
import Popup from "reactjs-popup";
import { TextField} from '@material-ui/core';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import './ModalModify.css';
import Box from '@material-ui/core/Box';

export default class ModalModifyBici extends Component{
  
  constructor(props) {
    super(props);
    this.state = { name:localStorage.getItem("nombre")+" "+localStorage.getItem("apellido"), email:localStorage.getItem("correo"), city:'Bogotá, Colombia'};
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }

  handleNameChange(e) {
    this.setState({name:  e.target.value});}
  handleCityChange(e) {
    this.setState({city:  e.target.value});}
  handleEmailChange(e) {
    localStorage.setItem("correo", e.target.value);
    this.setState({email:  e.target.value});}

  render(){
  return(
  <Popup trigger={<TouchableOpacity style={styles.buttonContainer} activeOpacity={.7}>
                      <Text style={styles.button}>Edit</Text>  
                  </TouchableOpacity>
    } modal>
    {close => (
      <div className="modal">
        <View style={styles.header}><Text style={styles.title}>My Bici Profile</Text></View>
        <div className="content">
        <View style={styles.popupContent}>
            <ScrollView contentContainerStyle={styles.modalInfo}>
                <Image style={styles.image} source={{uri: 'https://i.pinimg.com/originals/6e/58/54/6e58549a9aeaa45c97bfc525b8b3aa0f.jpg'}}/>
                <hr/>
                <form noValidate autoComplete="off" className="form" id="formModify">
                <TextField
                    disabled
                    id="name"
                    label="Name"                  
                    margin="normal"
                    onChange={this.handleNameChange}
                    value={this.state.name}
                    defaultValue={this.state.name}
                >
                </TextField>
                <br></br>
                <TextField
                    id="email"
                    label="Email"                  
                    margin="normal"
                    onChange={this.handleEmailChange}
                    value={this.state.email}
                    defaultValue={this.state.email}
                >
                </TextField>
                <br></br>
                <TextField
                    disabled
                    id="city"
                    label="City"                  
                    margin="normal"
                    onChange={this.handleCityChange}
                    value={this.state.city}
                    defaultValue={this.state.city}
                >
                </TextField>            
                </form>
                </ScrollView>
        </View>
        </div>
       
        <View style={styles.popupButtons}>
        <div className="actions">
        <Box display="flex">
          <TouchableOpacity style={styles.btnSave} activeOpacity={.7} onClick={() => {close();window.location.reload(true);}}>
            <Text>Save</Text>  
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnClose} activeOpacity={.7} onClick={() => {close();}}>
              <Text>Close</Text>  
          </TouchableOpacity>
          </Box>
        </div>
        </View>
        
      </div>
    )}
  </Popup>
  )}
}
  
  const styles = StyleSheet.create({
    image:{
      width:90,
      height:90,
      borderRadius:45,
    },
    email:{
      marginHorizontal:10,
      fontSize:22,
    },
    name:{
      fontSize:22,
      color:"#FFFFFF",
      fontWeight:'600',
    },
    button:{
      fontSize:22,
      color:"#FFFFFF",
      fontWeight:'600',
    },
    buttonContainer: {
      marginTop:30,
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:120,
      marginLeft:5,
      borderRadius:30,
      backgroundColor: "#0b396b",
    },
    popupContent: {
      //alignItems: 'center',
      marginTop: 30,
      margin: 5,
      height:250,
      flex: 2,
    },
    popupButtons: {
      marginTop: 15,
      flexDirection: 'row',
      borderTopWidth: 1,
      borderColor: "#eee",
      justifyContent:'center'
    },
    title:{
      fontSize:24,
      color: "#00CED1",
      marginBottom:10,
    },
    header: {
      marginTop: 10,
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderColor: "#eee",
      justifyContent:'center'
    },
    btnClose:{
      marginTop:10,
      height:40,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:100,
      borderRadius:30,
      backgroundColor: "#cb3234",
      marginLeft:5,

    },
    btnSave:{
      marginTop:10,
      height:40,
      width:100,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      borderRadius:30,
      marginLeft:5,
      backgroundColor: "#07d257",
    },
    modalInfo:{
      alignItems:'center',
      justifyContent:'center',
    }
  });
   

 