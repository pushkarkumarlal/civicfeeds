import { React, useState } from 'react';
import {
    View,
    SafeAreaView,
    Text,
    Image,
    TouchableOpacity,
    StatusBar,
    KeyboardAvoidingView,
    Alert
} from 'react-native';
import { Link } from 'expo-router';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

import styles from './checkPhoneNumberRegistered.style';

const rightArrow = require('../../../assets/logos/ArrowRightSmall.png');


const checkPhoneNumberRegistered = ({ navigation }) => {
    
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const handlesubmitArrow = () => {

        try{

            if(newPassword==confirmPassword){
                Alert.alert(
                'New Password Created',
                'Are you sure you want to delete this item?',
                [
                  {
                    text: 'OK',
                    onPress: () => navigation.navigate('Login')
                  },
                  
                ]
              );
            }
            else{
                Alert.alert(
                    'Password Do Not Match',
                    'Check Your Password And Try Again',
                    [{
                        text:'Retry',
                    onPress:() =>{setNewPassword(''),setConfirmPassword('')}
                    
                    },]
                );

              }

            }catch(error){
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
                    {/* inset image */}
                </View>

                <View style={styles.container2}>
                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder="New Password"
                            textAlign="center"
                            onChangeText={setNewPassword}
                            value={newPassword}
                        ></TextInput>

                        <TextInput
                            style={styles.input}
                            placeholder="Confirm Password"
                            textAlign="center"
                            onChangeText={setConfirmPassword}
                            value={confirmPassword}
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
