import React, { Component } from 'react';
import Popup from "reactjs-popup";
import { TextField, MenuItem, Chip, Select, Input, InputLabel} from '@material-ui/core';
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
import swal from 'sweetalert';

export default class ModalModifyBici extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = { color:localStorage.getItem("color"), brand:localStorage.getItem("marca"), atributes:[], setAtribute:[]};
    this.handleBrandChange = this.handleBrandChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleAtributesChange = this.handleAtributesChange.bind(this);
  }

  handleColorChange(e) {
    this.setState({color:  e.target.value});
    localStorage.setItem("color", e.target.value);
  }
  handleBrandChange(e) {
    this.setState({brand:  e.target.value});
    localStorage.setItem("marca", e.target.value)
  }
  handleAtributesChange(e) {
    this.state.atributes.push(e.target.value)
    //console.log(this.state.atributes);
    //this.setState({atributes:  atributes});
  }
  handleAtributeChange(e){
    this.setState({atributes: e.target.value});
    this.state.atributes.push(e.target.value);
  }
  onDelete(value){
    console.log(value);
    console.log(this.state.atributes);
    var other= this.state.atributes.filter(function(a){console.log(a!== value);return a!== value});
    this.setState({atributes: other});
    console.log(this.state.atributes[0]);
    //this.setState.({atributes: })
  }

  render(){
    const brands = [
      { value: "Eline"}, { value: "Fox" }, { value: "GW"},{value: "IceToolz"}, {value:"KMC"}, {value:"millenium"},{value:"PRO"}, {value:"Raleigh"},{value:"ritchey"}, {value:"scott"},{value:"otro"}
    ]
    const colors = [
      { value: "Negro"}, { value: "Blanco" }, { value: "Amarillo"},{value: "Rojo"},{value: "Verde"},{value: "Gris"},{value:"Azul"},{value: "Morado"},{value: "Rosado"}, {value:"otro"}
    ]
    const atributos = [
      { value: "Bastidor"}, { value: "3 Ruedas" }, { value: "2 Ruedas"}, {value:"Manillar"}, {value: "Sillín"},{value:"Luz"},{value:"Puños"},{value:"Velocímetro"}, {value:"Suspensión"},{value:"Cierres rápidos"}, {value:"Amortiguación"}
    ]      
  return(
  <Popup trigger={<TouchableOpacity style={styles.buttonContainer} activeOpacity={.7}>
                      <Text style={styles.button}>Edit</Text>  
                  </TouchableOpacity>
    } modal>
    {close => (
      <div className="modal" id="popup">
        <View style={styles.header}><Text style={styles.title}>My Bici Profile</Text></View>
        <div className="content">
        <View style={styles.popupContent}>
            <ScrollView contentContainerStyle={styles.modalInfo}>
                <Image style={styles.image} source={{uri: 'https://i.pinimg.com/originals/6e/58/54/6e58549a9aeaa45c97bfc525b8b3aa0f.jpg'}}/>
                <hr/>
                <form noValidate autoComplete="off" className="form" id="formModify">
                <TextField
                    select
                    id="color"
                    label="Color"                  
                    margin="normal"
                    helperText="Please select a color"
                    onChange={this.handleColorChange}
                    value={this.state.color}
                    defaultValue={this.state.color}
                >{colors.map(option =>(<MenuItem key={option.value} value={option.value}>
                   {option.value}
                  </MenuItem>))}
                </TextField>
                <br></br>
                <TextField
                    select
                    id="brand"
                    label="Brand"                  
                    margin="normal"
                    helperText="Please select a brand"
                    onChange={this.handleBrandChange}
                    value={this.state.brand}
                    defaultValue={this.state.brand}
                >{brands.map(option =>(<MenuItem key={option.value} value={option.value}>
                  {option.value}
                 </MenuItem>))}
                </TextField>
                <br></br>
                <br></br>
              <InputLabel htmlFor="select-multiple">Attributes</InputLabel>
              <Select id="select"
                    helperText="Select atributtes"
                    ismulti="true"                 
                    //margin="normal"
                    input={<Input id="m"></Input>}
                    onChange={this.handleAtributesChange}
                    value={this.state.atributes}
                    //defaultValue={this.state.atributes}
                    renderValue={selected => (
                      <div id="chips">
                        {selected.map(value => (
                            <Chip id="chip" key={value} label={value} onDelete={() => {this.onDelete(value);}} />
                        ))}
                      </div>
                    )}
                >{atributos.map(option =>(<MenuItem key={option.value} value={option.value}>
                  {option.value}
                 </MenuItem>))}
                </Select>            
                </form>
                </ScrollView>
        </View>
        </div>
       
        <View style={styles.popupButtons}>
        <div className="actions">
        <Box display="flex">
          <TouchableOpacity style={styles.btnSave} activeOpacity={.7} onClick={() => {close();swal("Modify", "You clicked the button!", "success");window.location.reload(true);}}>
            <Text>Modify</Text>  
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
    chip:{
      display:'flex',
      flexWrap:'wrap',
    },
    chip2:{
      marginLeft:0.22,
      marginRight:0.22,
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
   

 