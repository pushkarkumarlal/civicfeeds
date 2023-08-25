import React from 'react';
import axios from 'axios';
import {
    View,
    SafeAreaView,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    StatusBar,
    KeyboardAvoidingView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Link } from 'expo-router';

import styles from './loginpage.style';

const empowerVoteLogo = require('../../../assets/logos/EmpowerVote.png');

const loginPage = ({ navigation }) => {
    
    const [PhoneNumber, setPhoneNumber] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(false);

    const handleRegister = () => {
        navigation.navigate('Register');
      };

    const handleForgetPassword=()=>{
        navigation.navigate('checkPhoneNumberRegistered');
    }


    const handleLogin = async () => {
        try {

            const response = await axios.post('http://localhost:8080/users/login', {
                phoneNumber: PhoneNumber,
                password: password 
            });
            console.log('Response:', `Hello1 ${response.data}`);
            
            navigation.navigate('Dashboard');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar backgroundColor="#f0f0f0" barStyle="dark-content" />

            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <View style={styles.container1}>
                    <Image source={empowerVoteLogo}></Image>
                </View>
                <View style={styles.container2}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Phone Number"
                        placeholderTextColor="white"
                        onChangeText={setPhoneNumber}
                        value={PhoneNumber}
                    />
                    <View>
                        <TextInput
                            style={styles.inputText}
                            secureTextEntry={!showPassword}
                            placeholder="Password"
                            placeholderTextColor="white"
                            onChangeText={setPassword}
                            value={password}
                        />
                        <TouchableOpacity
                            style={styles.passwordVisibilityIcon}
                            onPress={() => setShowPassword(!showPassword)}
                        >
                            <Icon
                                name={showPassword ? 'eye-slash' : 'eye'}
                                size={20}
                                color="white"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.container3}>
                    <View style={styles.LoginContainer}>
                        <TouchableOpacity onPress={handleLogin}>
                            <View style={styles.loginButton}>
                                <Text style={styles.loginButtonText}>
                                    
                                        LOGIN
                                    
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.registerContainer}>
                        <TouchableOpacity onPress={handleRegister}>
                            <Text style={styles.register}>
                                
                                    Register
                            </Text>
                            <View style={styles.touchRegister}></View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={handleForgetPassword}>
                            <Text style={styles.forgetPassword}>
                                
                                    Forget Password?
                                
                                </Text>
                            <View style={styles.touchForgetPassword}></View>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};
export default loginPage;
