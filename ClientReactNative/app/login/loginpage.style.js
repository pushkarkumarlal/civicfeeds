import React from "react";
import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    container:{
        flex:3,
        backgroundColor:'#FFFFFF',
        fontSize:1
    },
    container1:{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
    container2:{
    flex:1,
    display:'flex',
    justifyContent:'space-evenly',
    alignItems:'center'
    },
    container3:{
      flex:1,
      
      display:'flex',
      justifyContent:'space-between',
     
    },
    inputText:{
        height:55,
        width:320,
        borderRadius:25,
        fontSize:20,
        textAlign:'center',
        backgroundColor:'black',
     
    },

    LoginContainer:{
      display:'flex',
      alignItems:'center',
      justifyContent:'center'
    },
    loginButton:{
    backgroundColor: '#000000',
    borderRadius: 15,
    width:70,
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
    },
    loginButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
    
    },
    registerContainer:{
      display:'flex',
      flexDirection:'column',
      justifyContent:'flex-end',
      alignItems:'flex-end',
      marginBottom:25,
      marginRight:15
    },
    register:{
        color: 'black', 
         fontSize: 20, 
        },
         forgetPassword:{
         color: 'black', 
         fontSize: 20, 
    },
    
    touchRegister:{ 
      borderRadius: 15,
      height:10,
      width:70,
      backgroundColor: '#000000', 
    },
  
    touchForgetPassword:{
      borderRadius: 15,
      height:10,
      width:155,
      backgroundColor: '#000000', 
    }
})

export default styles