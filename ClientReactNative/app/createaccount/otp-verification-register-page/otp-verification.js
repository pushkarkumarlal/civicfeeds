import React from 'react';
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

import styles from './otp-verification.style';

const rightArrow = require('../../../assets/logos/ArrowRightSmall.png');
const otpVerificationImage = require('../../../assets/logos/OtpVerification.png');

const OtpVerification = ({navigation}) => {

    const handlesubmitArrow = () => {

        try{
             navigation.navigate('UserInfo');
            }catch(error){
            console.log(" Opt Verfication Failed");
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
                    
                        <Image
                            style={styles.otpVerification}
                            source={otpVerificationImage}
                        />
                    
                </View>

                <View style={styles.container2}>
                    <TextInput style={styles.input} textAlign="center" />
                    <TextInput style={styles.input} textAlign="center" />
                    <TextInput style={styles.input} textAlign="center" />
                    <TextInput style={styles.input} textAlign="center" />
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

export default OtpVerification;
