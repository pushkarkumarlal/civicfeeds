import React from "react";
import {View,SafeAreaView,Text,Image,TextInput,TouchableOpacity,StatusBar} from 'react-native'

import {Link} from 'expo-router'

import styles from './loginpage.style'

const empowerVoteLogo =require('../../assets/logos/EmpowerVote.png')

const loginpage=()=>{
    const [userName, setUserName] = React.useState('');
    const [password,setPassword] = React.useState('')

    return(
            <SafeAreaView style={styles.container}>
                 <StatusBar  backgroundColor="#f0f0f0" barStyle="dark-content"/>
                <View style={styles.container1}>
                   <Image source={ empowerVoteLogo}></Image>
                </View>
                <View style={styles.container2}>
                    
                       
                 <TextInput style={styles.inputText} placeholder='User Name'  placeholderTextColor="white" onChangeText={setUserName} value={userName}/>
                       
                <TextInput style={styles.inputText} secureTextEntry={true} placeholder='Password' placeholderTextColor="white" onChangeText={setPassword} value={password}/>
                        
                    
                </View>
                <View style={styles.container3}>
                    <View style={styles.LoginContainer}>
                        <TouchableOpacity>
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
            </SafeAreaView>
    )
}
export default loginpage;


