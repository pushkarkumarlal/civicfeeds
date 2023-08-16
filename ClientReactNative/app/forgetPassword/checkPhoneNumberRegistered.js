import { React, useState } from 'react';
import {
    View,
    SafeAreaView,
    Text,
    Image,
    TouchableOpacity,
    StatusBar,
    KeyboardAvoidingView,
} from 'react-native';
import { Link } from 'expo-router';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

import styles from './checkPhoneNumberRegistered.style';
const createAccountImage = require('../../assets/logos/CreateAccount.png');
const rightArrow = require('../../assets/logos/ArrowRightSmall.png');


const checkPhoneNumberRegistered = ({ navigation }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [areaCode, setAreaCode] = useState('');


    const handlesubmitArrow = () => {

        try{
             navigation.navigate('OtpVerificationForgetPassword');
            }catch(error){
            console.log("Your Number Is Not Registered");
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
                    {/* <View style={styles.container1_1}>
                        
                    </View>

                    <View style={styles.container1_2}>
                       
                    </View> */}
                </View>

                <View style={styles.container2}>
                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Mobile Number"
                            textAlign="center"
                            onChangeText={setPhoneNumber}
                            value={phoneNumber}
                        ></TextInput>

                        <TextInput
                            style={styles.input}
                            placeholder="Enter Country Code"
                            textAlign="center"
                            onChangeText={setAreaCode}
                            value={areaCode}
                        ></TextInput>
                    </View>
                </View>

                <View style={styles.container3}>
                    <TouchableOpacity  style={styles.submitArrow} onPress={handlesubmitArrow}>
                    <Image source={rightArrow} />
                    </TouchableOpacity>
                        
                    
                </View>
                </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default checkPhoneNumberRegistered;
