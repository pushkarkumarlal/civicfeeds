import {React,useState} from "react";
import {View,SafeAreaView,Text,Image,TouchableOpacity,StatusBar} from 'react-native'
import { Link } from "expo-router";
import { ScrollView, TextInput } from "react-native-gesture-handler";


import styles from './phonenum.style'
const createAccountImage=require('../../../assets/logos/CreateAccount.png')
const rightArrow=require('../../../assets/logos/ArrowRightSmall.png')
const leftArrow=require('../../../assets/logos/ArrowLeftSmall.png')



const PhoneNumber=()=>{

const [phoneNumber,setPhoneNumber]=useState("");

const [areaCode,setAreaCode]=useState("");

    return(
        <View style={{flex:1}}>
        <SafeAreaView style={styles.container}>
        <StatusBar  backgroundColor="#f0f0f0" barStyle="dark-content"/>

            <View style={styles.container1}>
                <View style={styles.container1_1}>
                <Link href='../../login/loginpage'>.<Image style={styles.topHeaderBackArrow}source={leftArrow}/></Link></View>
                
                <View style={styles.container1_2}>
                <Image style={styles.createAccountImage} source={createAccountImage}/>
                    </View>
            </View>
           

            <View style={styles.container2}>
                <View>
                    <TextInput style={styles.input} placeholder="Enter Mobile Number" textAlign="center"></TextInput>
                    <TextInput style={styles.input} placeholder="Enter Country Code" textAlign="center">
                    </TextInput>
                
                </View>
            </View>

            <View style={styles.container3}>
                
               <Link href='../otp-verification-register-page/otp-verification'> <Image source={rightArrow}/></Link>
                
            </View>

        </SafeAreaView>
        </View>
    )
}

export default PhoneNumber;