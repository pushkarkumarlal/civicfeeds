import React from "react";
import axios from 'axios';
import {View,SafeAreaView,Text,Image,TextInput,TouchableOpacity,StatusBar,KeyboardAvoidingView} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'; 

import {Link} from 'expo-router'

import styles from './loginpage.style'

const empowerVoteLogo =require('../../assets/logos/EmpowerVote.png')

const loginpage=()=>{
    const [PhoneNumber, setPhoneNumber] = React.useState('');
    const [password,setPassword] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(false);

    const handleLogin=async()=>{
        try{
            const response=await axios.post('http://localhost:8080/login',{
                PhoneNumber:PhoneNumber,
                password:password
            })
            const authToken = response.data.token;

        }catch(error){
            console.log("Authentication Failed")
        }
    }

    return(
            <SafeAreaView style={{ flex: 1 }}>
                 <StatusBar  backgroundColor="#f0f0f0" barStyle="dark-content"/>

                 <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === "ios" ? "padding" : "height"} 
            >
                <View style={styles.container1}>
                   <Image source={ empowerVoteLogo}></Image>
                </View>
                <View style={styles.container2}>
                    
                       
                <TextInput style={styles.inputText} placeholder='Phone Number'  placeholderTextColor="white" onChangeText={setPhoneNumber} value={PhoneNumber}/>
                <View>

                <TextInput style={styles.inputText} secureTextEntry={!showPassword}placeholder='Password' placeholderTextColor="white" onChangeText={setPassword} value={password}/>
                <TouchableOpacity style={styles.passwordVisibilityIcon} onPress={() => setShowPassword(!showPassword)}> 
                 <Icon name={showPassword ? 'eye-slash' : 'eye'} size={30} color="white"/>
                 </TouchableOpacity>
                </View>

                </View>
                <View style={styles.container3}>
                    <View style={styles.LoginContainer}>
                        <TouchableOpacity onPress={handleLogin}>
                            <View style={styles.loginButton}>
                                <Text style={styles.loginButtonText}><Link href='../dashboard/dashboard'>LOGIN</Link></Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.registerContainer}>
                        <TouchableOpacity>
                            <Text style={styles.register}><Link href='../createaccount/phonenum/phonenum'>Register</Link></Text>
                            <View style={styles.touchRegister}></View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.forgetPassword} ><Link href ='../forgetPassword/forgetpassword'>Forget Password?</Link></Text>
                            <View style={styles.touchForgetPassword}></View>
                        </TouchableOpacity>
                    </View>
                </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
    )
}
export default loginpage;


